# Imagen MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript-based image generation MCP server using SiliconFlow API for image generation.

一个基于 TypeScript 的图像生成 MCP 服务器，使用 SiliconFlow API 进行图像生成。

## Features

- 🎨 Generate high-quality images using SiliconFlow API
- 🔧 Support customizable generation parameters (prompts, random seeds, etc.)
- 🚀 Perfect integration with Claude Desktop
- 💻 Cross-platform support (Windows, MacOS)

## 功能特点

- 🎨 使用 SiliconFlow API 生成高质量图像
- 🔧 支持自定义生成参数（如提示词、随机种子等）
- 🚀 与 Claude Desktop 完美集成
- 💻 跨平台支持 (Windows, MacOS)

## Prerequisites

- Node.js >= 16.0.0
- npm >= 7.0.0
- SiliconFlow API Token

## 前置要求

- Node.js >= 16.0.0
- npm >= 7.0.0
- SiliconFlow API Token

## Installation

1. Clone the repository:
```bash
git clone https://github.com/zym9863/imagen-server.git
cd imagen-server
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Set environment variables:
```bash
export SILICONFLOW_API_TOKEN=your_api_token_here  # Linux/MacOS
set SILICONFLOW_API_TOKEN=your_api_token_here     # Windows
```

## 安装

1. 克隆仓库：
```bash
git clone https://github.com/zym9863/imagen-server.git
cd imagen-server
```

2. 安装依赖：
```bash
npm install
```

3. 构建项目：
```bash
npm run build
```

4. 设置环境变量：
```bash
export SILICONFLOW_API_TOKEN=your_api_token_here  # Linux/MacOS
set SILICONFLOW_API_TOKEN=your_api_token_here     # Windows
```

## Configuration

To use with Claude Desktop, add the server configuration:

- MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "imagen": {
      "command": "/path/to/imagen/build/index.js"
    }
  }
}
```

## 配置

要与 Claude Desktop 一起使用，请添加服务器配置：

- MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "imagen": {
      "command": "/path/to/imagen/build/index.js"
    }
  }
}
```

## Usage

The server provides the following tools:

### generate_image
Generate and save images locally:
- Required parameter: `prompt` (generation prompt)
- Optional parameter: `seed` (random seed)

## 使用方法

服务器提供以下工具：

### generate_image
生成图像并保存到本地：
- 必需参数：`prompt`（生成提示词）
- 可选参数：`seed`（随机种子）

## Development

Development mode (auto-rebuild):
```bash
npm run watch
```

### Debugging

Since MCP servers communicate via stdio, debugging can be challenging. We recommend using [MCP Inspector](https://github.com/modelcontextprotocol/inspector):

```bash
npm run inspector
```

Inspector will provide a URL to access the debugging tools in your browser.

## 开发

开发模式（自动重新构建）：
```bash
npm run watch
```

### 调试

由于 MCP 服务器通过 stdio 通信，调试可能具有挑战性。我们推荐使用 [MCP Inspector](https://github.com/modelcontextprotocol/inspector)：

```bash
npm run inspector
```

Inspector 将提供一个 URL，用于在浏览器中访问调试工具。

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 贡献

欢迎提交 Pull Requests！对于重大更改，请先开 issue 讨论您想要更改的内容。

## License

[MIT](LICENSE)

## 许可证

[MIT](LICENSE)

## Acknowledgments

- [SiliconFlow API](https://siliconflow.cn) - Image generation service provider
- [Model Context Protocol](https://github.com/modelcontextprotocol) - MCP SDK support

## 致谢

- [SiliconFlow API](https://siliconflow.cn) - 提供图像生成服务
- [Model Context Protocol](https://github.com/modelcontextprotocol) - MCP SDK 支持
