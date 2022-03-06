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

## design-06k4 v1.0.1

基于 react + typescript 实现的一款 react ui 组件库。

了解更多：

文档地址：https://design.06k4.com(暂未开放，敬请期待)

立即使用：

npm 安装: `pnpm install design-06k4`

### v0.0.1 -> v1.0.1 做了什么更新

重构了整个项目的架构：

🚀 启动更快：采用 vite 替换 webpack cli，项目启动速度提升十倍。

🚀 打包更快： 采用 rollup 替换 webpack 打包， rollup 相比与 webpack 更适合与 js 类库项目打包，打包后体积更小，打包速度更快, 支持 tree shaking。

🚀 依赖安装快更：采用 pnpm 代替 npm 进行包管理，依赖安装速度更快，更安全，且支持 monorepo。

### 目前支持的组件

🌟divider: 常用的内容分割线。
