<!--
 * @Author: YeWei Wang
 * @Date: 2022-03-06 14:02:15
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:
 * @LastEditTime: 2022-03-07 00:57:12
 * @Version: 1.0
 * @FilePath: \design-06k4\README.md
-->

## Design 06k4 of React

`Design 06k4`是基于typescript编写的React UI 组件库，用于快速构建React Web应用。

<div style="display: flex;">
<img src="https://user-images.githubusercontent.com/49926816/156933931-d590e663-b5b4-48d1-b774-8424e55b97bf.png" width="120px">
<img src="https://user-images.githubusercontent.com/49926816/156934122-e92cd24a-93ef-4c16-a9cc-25c7a54cd1e3.png" width="120px">
</div>

### ✨特性：

- 📦 开箱即用的React组件。
- 🔒 基于typescript开发，提供完整的类型定义文件。
- 🎪 提炼自企业级产品的交互语言和设计风格。
- ⚡ 小巧而精干的设计体系。

### v0到v1

🚀 启动更快：采用 vite 替换 webpack cli，项目启动速度提升十倍。

🚀 打包更快： 采用 rollup 替换 webpack 打包，打包速度更快。

🚀 依赖安装快更：采用 pnpm 替换 npm 进行包管理，依赖安装速度更快。

### 安装
#### 使用npm安装
`npm install design-06k4 --save`

#### 示例
```javascript
import { KDivider } from 'design-06k4';

ReactDOM.render(<KDivider />, mountNode);

```

##### 引入样式文件

```javasctipt
import 'design-06k4/lib/index.css'
```

### 按需加载
默认支持tree shaking
### 目前支持的组件

🌟divider: 常用的内容分割线。
