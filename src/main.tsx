/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:12:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-07 14:50:08
 * @Version: 1.0
 * @FilePath: \design-06k4\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import KDivider from './packages/divider/Divider'

import { KDivider } from '@/packages/divider/Divider'
import KButton from './packages/button/Button'
import './style/index.scss'
ReactDOM.render(
  <div style={{ "width": "600px" }}>
    <KDivider oritation='left'>按钮类型</KDivider>

    <div className="btns">
      <KButton btnType='primary'>主按钮</KButton>
      <KButton btnType='default'>默认按钮</KButton>
      <KButton btnType='text'>文本按钮</KButton>
      <KButton btnType='link'>链接按钮</KButton>
    </div>
  </div>,
  document.getElementById('root')
)
