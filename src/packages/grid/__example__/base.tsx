import React, { FC } from "react";
import { KCol, KRow } from '../index'

export const RowDemo: FC<any> = () => {

  const innerStyle = {
    'height': '120px',
    'lineHeight': '120px',
    // 'textAlign': 'center'
  }

  const col_blue = {
    'background': '#3498db'
  }

  const col_deep_blue = {
    'background': '#2980b9'
  }

  const col_deep_green = {
    'background': '#27ae60'
  }

  return (
    <>
      <KRow>
        <KCol span={24} style={{ ...innerStyle, ...col_blue }}>col</KCol>
      </KRow>
      <KRow>
        <KCol span={12} style={{ ...innerStyle, ...col_blue }}>col-12</KCol>
        <KCol span={12} style={{ ...innerStyle, ...col_deep_blue }}>col-12</KCol>
      </KRow>
      <KRow>
        <KCol span={8} style={{ ...innerStyle, ...col_deep_blue }}>col-8</KCol>
        <KCol span={8} style={{ ...innerStyle, ...col_blue }}>col-8</KCol>
        <KCol span={8} style={{ ...innerStyle, ...col_deep_green }}>col-8</KCol>
      </KRow>
    </>
  )
}