# Imagen MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个基于 TypeScript 的图像生成 MCP 服务器，使用 SiliconFlow API 进行图像生成。

## 功能特点

- 🎨 使用 SiliconFlow API 生成高质量图像
- 🔧 支持自定义生成参数（如提示词、随机种子等）
- 🚀 与 Claude Desktop 完美集成
- 💻 跨平台支持 (Windows, MacOS)

## 前置要求

- Node.js >= 16.0.0
- npm >= 7.0.0
- SiliconFlow API Token

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

## 使用方法

服务器提供以下工具：

### generate_image
生成图像并保存到本地：
- 必需参数：`prompt`（生成提示词）
- 可选参数：`seed`（随机种子）

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

## 贡献

欢迎提交 Pull Requests！对于重大更改，请先开 issue 讨论您想要更改的内容。

## 许可证

[MIT](LICENSE)

## 致谢

- [SiliconFlow API](https://siliconflow.cn) - 提供图像生成服务
- [Model Context Protocol](https://github.com/modelcontextprotocol) - MCP SDK 支持
