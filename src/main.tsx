/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:12:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-06 23:04:37
 * @Version: 1.0
 * @FilePath: \design-06k4-2\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import KDivider from './packages/divider/Divider'
import './style/index.scss'
ReactDOM.render(
  <div>
    <KDivider></KDivider>
    <KDivider dashbord>dashed text</KDivider>
    <KDivider dashbord oritation='left'>left dased text</KDivider>
    <KDivider dashbord oritation='right'>right dased text</KDivider>
  </div>,
  document.getElementById('root')
)
