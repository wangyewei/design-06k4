/*
 * @Author: YeWei Wang
 * @Date: 2022-03-07 14:02:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-08 14:20:00
 * @Version: 1.0
 * @FilePath: \design-06k4\src\packages\button\__example__\example.tsx
 */

import React, { FC, ReactNode, useState } from "react"
import KDivider from "@/packages/divider/"
import KButton from ".."
import KIcon from "@/packages/icon"


export const ButtonDemo: FC<any> = () => {
  const [size, setSize] = useState<'middle' | 'large' | 'small'>('middle')
  const [loading, setLoading] = useState<boolean>(false)
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  const [loading3, setLoading3] = useState<boolean>(false)
  const diffTypesBtns: ReactNode = (
    <div style={{ "width": "600px" }}>
      <KDivider oritation='left'>按钮类型</KDivider>
      <div className="btns">
        <KButton type='primary'>主按钮</KButton>
        <KButton type='default'>默认按钮</KButton>
        <KButton type="dashed">虚线按钮</KButton>
        <KButton type='text'>文本按钮</KButton>
        <KButton type='link' href="https://06k4.com">链接按钮</KButton>
      </div>

      <KDivider oritation='left'>按钮尺寸</KDivider>
      <KButton onClick={() => setSize('large')}>large</KButton>
      <KButton onClick={() => setSize('middle')}>middle</KButton>
      <KButton onClick={() => setSize('small')}>small</KButton>
      <div className="btns">
        <KButton type='primary' size={size}>主按钮</KButton>
        <KButton type='default' size={size}>默认按钮</KButton>
        <KButton type="dashed" size={size}>虚线按钮</KButton>
        <KButton type='text' size={size}>文本按钮</KButton>
        <KButton type='link' size={size} href="https://06k4.com">链接按钮</KButton>
      </div>

      <KDivider oritation='left'>幽灵按钮</KDivider>
      <div className="btns" style={{ background: '#999', padding: '6px' }}>
        <KButton type='primary' ghost>主按钮</KButton>
        {/* <KButton type='default' ghost danger>危险主按钮</KButton> */}
        <KButton type="dashed" ghost>虚线按钮</KButton>
        <KButton type="dashed" ghost danger>危险按钮</KButton>
      </div>

      <KDivider oritation="left">危险按钮</KDivider>
      <div className="btns">
        <KButton type="primary" danger>主按钮</KButton>
        <KButton type="default" danger>默认按钮</KButton>
        <KButton type="dashed" danger>虚线按钮</KButton>
        <KButton type="link" href="https://06k4.com" danger>链接按钮</KButton>
        <KButton type="text" danger>文字按钮</KButton>
      </div>

      <KDivider oritation="left">不可用状态</KDivider>
      <div className="btns">
        <KButton type="primary">主按钮</KButton>
        <KButton type="primary" disabled>不可用的主按钮</KButton>
        <br />
        <KButton type="default">默认按钮</KButton>
        <KButton type="default" disabled>不可用的默认按钮</KButton>
        <br />
        <KButton type="dashed">虚线按钮</KButton>
        <KButton type="dashed" disabled>不可用的虚线按钮</KButton>
        <br />
        <KButton type="link" href="https://06k4.com">链接按钮</KButton>
        <KButton type="link" href="https://06k4.com" disabled>不可用的链接按钮</KButton>
        <br />
        <KButton type="text">文字按钮</KButton>
        <KButton type="text" disabled>不可用的文字按钮</KButton>
      </div>

      <KDivider oritation="left">按钮形状</KDivider>
      <div className="btns">
        <KButton shape="default" type="primary">A</KButton>
        <KButton shape="circle" type="primary">A</KButton>
        <KButton shape="round" type="primary">A</KButton>
      </div>

      <KDivider oritation="left">按钮图标</KDivider>
      <div className="btns">
        <KButton type="primary">主按钮</KButton>
        <KButton type="primary" disabled>不可用的主按钮</KButton>
        <br />
        <KButton type="default">默认按钮</KButton>
        <KButton type="default" disabled>不可用的默认按钮</KButton>
        <br />
        <KButton type="dashed">虚线按钮</KButton>
        <KButton type="dashed" disabled>不可用的虚线按钮</KButton>
        <br />
        <KButton type="link" href="https://06k4.com">链接按钮</KButton>
        <KButton type="link" href="https://06k4.com" disabled>不可用的链接按钮</KButton>
        <br />
        <KButton type="text">文字按钮</KButton>
        <KButton type="text" disabled>不可用的文字按钮</KButton>
      </div>

      <KDivider oritation="left">按钮形状</KDivider>
      <div className="btns">
        <KButton shape="default" type="primary">A</KButton>
        <KButton shape="circle" type="primary">A</KButton>
        <KButton shape="round" type="primary">A</KButton>
      </div>

      <KDivider oritation="left">加载状态按钮</KDivider>

      <div className="btns">
        <KButton type="primary"
          loading={loading}
          onClick={() => setLoading(true)}
          shape="circle"
          iconName="upload"
        >
        </KButton>
        <KButton type="primary"
          loading={loading1}
          onClick={() => setLoading1(true)}
          iconName="upload"
          danger>加载</KButton>
        <KButton type="default" loading={loading2} onClick={() => setLoading2(true)} iconName="upload"></KButton>
        <KButton type="dashed" loading={loading3} onClick={() => setLoading3(true)} iconName="upload"></KButton>
      </div>
    </div>
  )


  return (
    <>
      <h3>Button组件</h3>
      {diffTypesBtns}
    </>
  )
}

export default ButtonDemo