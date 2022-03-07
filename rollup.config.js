/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 23:05:59
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: rollup配置
 * @LastEditTime: 2022-03-07 14:54:47
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
import sass from 'sass'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: "**/node_modules/**"
}

const processScss = function (context, payload) {
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

const aliasRootDir = path.resolve(__dirname)

export default {
  input: 'src/index.ts',
  output: {
    file: packageJson.main,
    format: "es"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.', 'src'),
    }
  },
  external: id => /\/__expample__|main.js/.test(id),
  plugins: [
    peerDepsExternal({ includeDependencies: !isProd }),
    resolve(),
    commonjs({ sourceMap: !isProd }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      process: processScss
    }),
    babel(babelOptions),
    json()
  ]
}