import React, { FC } from "react";
import KLayout from '../'

const { Header, Footer, Content } = KLayout

export const LayoutBasic: FC<any> = () => {

  const headerStyles = {
    height: '40px',
    width: '100%',
    background: '#3498db',
    'text-align': 'center',
    color: '#fff'
  }

  const contentStyles = {
    width: '100%',
    height: '400px',
    'text-align': 'center',
    color: '#fff',
    'line-height': '400px'
  }

  return (
    <>
      <KLayout>
        <Header style={{ background: '#3498db' }}>
          <div style={{ ...headerStyles }}>Header</div>
        </Header>
        <Content style={{ background: '#2980b9' }}>
          <div style={{ ...contentStyles }}>Content</div>
        </Content>
        <Footer style={{ background: '#3498db' }}>
          <div style={{ ...headerStyles }}>Footer</div>
        </Footer>
      </KLayout>
    </>
  )
}