import KButton from "@/packages/button";
import React, { CSSProperties, FC } from "react";
import KPageHeader from "../PageHeader";
import { KCol, KRow } from "@/packages/grid";
export default () => {

  const style: CSSProperties = {
    'padding': '24px',
    'backgroundColor': '#f5f5f5',
  }

  const pageHeaderStyle: CSSProperties = {
    'backgroundColor': '#fff'
  }

  const extraStyle: CSSProperties = {
    'margin': '0 2px',
  }
  return (
    <div style={{ ...style }}>
      <KPageHeader
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <KButton key="3" style={{ ...extraStyle }}>Operation</KButton>,
          <KButton key="2" style={{ ...extraStyle }}>Operation</KButton>,
          <KButton key="1" style={{ ...extraStyle }} type="primary">Primary</KButton>
        ]}
        style={{ ...pageHeaderStyle }}
      >
        <KRow>
          <KCol span={8}>Name: WangYewei</KCol>
          <KCol span={8}>Email:<a href="mailto:wangyewei1@foxmail.com"> wangyewei1@foxmail.com</a></KCol>
          <KCol span={8}>Job: front-end developer</KCol>
        </KRow>

        <KRow>
          <KCol span={8}>Update-time: 2022-5-13</KCol>
          <KCol span={16}>Address: ChengDu Technological University, Pidu District, Chengdu, Sichuan, China</KCol>
        </KRow>



      </KPageHeader>
    </div>
  )
}