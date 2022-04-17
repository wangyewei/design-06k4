<!--
 * @Author: YeWei Wang
 * @Date: 2022-03-06 14:02:15
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2022-03-07 16:05:22
 * @Version: 1.0
 * @FilePath: \design-06k4\README.md
-->

## Design 06k4 of React

`Design 06k4`是基于 typescript 编写的 React UI 组件库，用于快速构建 React Web 应用。

<div style="display:flex;" align="center">
<img src="https://user-images.githubusercontent.com/49926816/156933931-d590e663-b5b4-48d1-b774-8424e55b97bf.png" width="120px"/>
  <span> </span>
<img src="https://user-images.githubusercontent.com/49926816/156934122-e92cd24a-93ef-4c16-a9cc-25c7a54cd1e3.png" width="120px" />
</div>

### ✨ 特性：

- 📦 开箱即用的 React 组件。
- 🔒 基于 typescript 开发，提供完整的类型定义文件。
- 🎪 提炼自企业级产品的交互语言和设计风格。
- ⚡ 小巧而精干的设计体系。

文档地址：https://design.06k4.com

### v0 到 v1

🚀 启动更快：采用 vite 替换 webpack cli，项目启动速度提升十倍。

🚀 打包更快： 采用 rollup 替换 webpack 打包，打包速度更快。

🚀 依赖安装快更：采用 pnpm 替换 npm 进行包管理，依赖安装速度更快。

### 安装

#### 使用 npm 安装

`npm install design-06k4 --save`

#### 示例

```javascript
import { KDivider } from "design-06k4"

ReactDOM.render(<KDivider />, mountNode)
```

##### 引入样式文件

```javasctipt
import 'design-06k4/dist/index.css'
```

🚀 依赖安装快更：采用 pnpm 替换 npm 进行包管理，依赖安装速度更快，更安全，且支持 monorepo。

### 按需加载

默认支持 `tree shaking`
