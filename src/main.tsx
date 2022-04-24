/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:12:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-08 14:14:10
 * @Version: 1.0
 * @FilePath: \design-06k4\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
// import ButtonDemo from './packages/button/__example__/example'
// import BasicTitle from './packages/typography/__example__/basicTitle'
import BasicText from './packages/typography/__example__/basicText'
import './style/index.scss'
ReactDOM.render(
  <>
    <BasicText />
  </>,
  document.getElementById('root')
)
