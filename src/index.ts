#!/usr/bin/env node
import axios from 'axios';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

interface GenerateImageArguments {
  prompt: string;
  seed?: number;
}

const API_TOKEN = process.env.SILICONFLOW_API_TOKEN;
if (!API_TOKEN) {
  throw new Error("SILICONFLOW_API_TOKEN environment variable is required");
}

const server = new Server(
  {
    name: "imagen-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "generate_image",
      description: "Generate an image using siliconflow API and download PNG image to current directory",
      inputSchema: {
        type: "object",
        properties: {
          prompt: {
            type: "string",
            description: "Prompt for image generation",
          },
          seed: {
            type: "number",
            description: "Seed for random generation",
          },
        },
        required: ["prompt"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "generate_image") {
    const args = request.params.arguments as Record<string, unknown> | undefined;
    const prompt = args?.prompt as string;
    const seed = args?.seed as number | undefined;

    if (!prompt) {
      return {
        content: [
          {
            type: "text",
            text: `Error: Prompt is required for generate_image tool.`,
          },
        ],
        isError: true,
      };
    }

    try {
      const response = await axios.post(
        "https://api.siliconflow.cn/v1/images/generations",
        {
          model: "black-forest-labs/FLUX.1-schnell",
          prompt: prompt,
          seed: seed,
        },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const imageUrl = response.data.images[0].url.replace(/&amp;/g, '&');
      
      // 下载并保存图片
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const tempDir = path.join(os.tmpdir(), 'imagen-cache');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
      
      const timestamp = Date.now();
      const imagePath = path.join(tempDir, `generated_${timestamp}.png`);
      fs.writeFileSync(imagePath, imageResponse.data);

      return {
        content: [
          {
            type: "text",
            text: `Image generated and saved successfully.\nURL: ${imageUrl}\nLocal path: ${imagePath}`,
          },
        ],
      };
    } catch (error: any) {
      console.error("API error:", error.response ? error.response.data : error.message);
      return {
        content: [
          {
            type: "text",
            text: `API Error: ${error.response ? JSON.stringify(error.response.data) : error.message}`,
          },
        ],
        isError: true,
      };
    }
  } else {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }
});


async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Imagen MCP server running on stdio');
}

main().catch(console.error);
