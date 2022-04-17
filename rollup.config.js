/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 23:05:59
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: rollup配置
 * @LastEditTime: 2022-03-08 14:31:51
 * @Version: 1.0
 * @FilePath: \design-06k4\rollup.config.js
 */
//提示宿主环境(项目)去安装满足插件peerDependencies所指定依赖的包
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import packageJson from './package.json'
import dts from 'rollup-plugin-dts'
import sass from 'sass'

const isProd = process.env.NODE_ENV === 'production'

const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: "**/node_modules/**"
}

const processScss = function (context) {
  return new Promise((resolve, reject) => {
    sass.compile(
      {
        file: context
      },
      function (err, result) {
        if (!err) {
          resolve(result)
        } else {
          reject(result)
        }
      }
    );
    sass.compile(context, {}).then(
      function (output) {
        if (output && output.css) {
          resolve(output.css)
        } else {
          reject({})
        }
      },
      function (err) {
        reject(err)
      }
    )
  })
}

const baseHandler = {
  input: 'src/index.ts',
  output: {
    file: packageJson.main,
    format: "es",
    name: packageJson.name,
    // sourcemap: true
  },
  external: [id => /\/__expample__|main.js/.test(id), 'react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({ sourceMap: !isProd }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      process: processScss
    }),
    babel(babelOptions),
    json(),
  ]
}

const typeHandler = {
  input: 'src/types.ts',
  output: {
    file: packageJson.typings,
    format: "es",
    name: `${packageJson.name}-types`
  },
  plugins: [
    // resolve(),
    typescript(),
    dts()
  ]
}


export default [baseHandler, typeHandler]
