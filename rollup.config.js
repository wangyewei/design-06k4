import * as path from 'path'
import * as fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import sass from 'sass'

// 入口

const entry = 'components/index.ts'
const componentsDir = 'components/packages'
const componentsName = fs.readdirSync(path.resolve(componentsDir))
const componentsEntry = componentsName.map(
  (name) => `${componentsDir}/${name}/index.ts`
)

// 环境变量
const isProd = process.env.NODE_ENV === 'production'
const BABEL_ENV = process.env.BABEL_ENV

// Babel配置
const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: "**/node_modules/**"
}

// 通用插件
const commonPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs({ sourceMap: !isProd }),
  typescript(),
  babel(babelOptions),
  json(),
  // dts()
]

// 忽略文件
const externalConfig = [
  id => /\/__expample__|main.tsx/.test(id),
  'react',
  'react-dom',
  'classname',
  'react-is',
  "@fortawesome/fontawesome-svg-core",
  "@fortawesome/free-solid-svg-icons",
  "@fortawesome/react-fontawesome",
  '**/node_modules/**'
]

// sass打包
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
    )
  })
}


const esmOutput = {
  preserveModules: true,
}

export default () => {
  switch (BABEL_ENV) {
    case 'esm':
      return {
        input: [entry, ...componentsEntry],
        output: { ...esmOutput, dir: 'dist/', format: 'es' },
        external: externalConfig,
        plugins: [postcss({
          extract: true,
          process: processScss,
        }), ...commonPlugins]
      }
    default:
      return {
        input: [entry, ...componentsEntry],
        output: { ...esmOutput, dir: 'dist/', format: 'es' },
        external: externalConfig,
        plugins: [postcss({
          extract: true,
          process: processScss,
        }), ...commonPlugins]
      }
  }
}