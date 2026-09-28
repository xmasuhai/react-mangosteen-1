# 山竹记账-前端 React@19+ React-compiler 版

> 网页预览：

为了确保团队环境的一致性，本项目通过 **Corepack** 严格锁定了 Node.js 版本和包管理器（`pnpm`）。请在开发前按照以下步骤配置你的本地环境。

## 🛠️ 环境准备

### 1. 检查 Node.js 版本
请确保你的本地 Node.js 版本符合项目要求：
* **要求版本**：`>=22.23.2`
* **检查命令**：`node -v`

### 2. 开启官方 Corepack
本项目利用 Node.js 自带的 Corepack 来管理包管理器版本，无需你全局手动安装 pnpm。请在终端执行以下命令开启它：

```bash
corepack enable
corepack prepare pnpm@11.27.0 --active
```

---

## 📦 依赖安装与启动

配置完成后，你可以直接在项目根目录下执行以下命令：

### 安装依赖

```bash
pnpm install
```

> ⚠️ **注意**：请勿使用 `npm install` 或 `yarn install`。项目中配置了拦截脚本，使用非 `pnpm` 命令将会导致安装失败。

### 本地开发

```bash
pnpm dev
```

### 项目打包

```bash
pnpm build
```

---

### 主要依赖技术栈

- `vite@8.3.1`
- `typescript@7.0.2`
- `react@19.3.0`
- `react-router`
- `sass`(`sass-embedded@1.104.1`)

---

## ❓ 常见问题排查

**Q: 运行 `pnpm install` 提示 `Command not found`？**
A: 请确保你已经成功执行了 `corepack enable`。如果依然报错，请尝试重启终端。

**Q: 运行 `npm install` 报错 `请使用 pnpm 进行安装！`？**
A: 本项目已锁定包管理器，请严格使用 `pnpm install` 提交和管理依赖。

---
---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
