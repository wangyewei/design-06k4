import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import KTransition from './KTransition'
import KButton from '../Button/KButton'


export const DefaultTransition = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <KButton size="sm" onClick={() => { setShow(!show) }} >
        展示动画
      </KButton>
      <KTransition in={show} timeout={300} animation="zoom-in-left">
        <div>zoom-in-left</div>
      </KTransition>
      <KTransition in={show} timeout={300} animation="zoom-in-top">
        <div>zoom-in-top</div>
      </KTransition>
      <KTransition in={show} timeout={300} animation="zoom-in-bottom">
        <div>zoom-in-bottom</div>
      </KTransition>
      <KTransition in={show} timeout={300} animation="zoom-in-right">
        <div>zoom-in-tight</div>
      </KTransition>
    </>
  )
}
storiesOf('动画 KTransition', module)
  .add('KTransition', DefaultTransition)
