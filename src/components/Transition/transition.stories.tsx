import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Transition from './Transition'
import Button from '../Button/Button'


export const DefaultTransition = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <Button size="sm" onClick={() => { setShow(!show) }} >
        展示动画
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-left">
        <div>zoom-in-left</div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-top">
        <div>zoom-in-top</div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-bottom">
        <div>zoom-in-bottom</div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-right">
        <div>zoom-in-tight</div>
      </Transition>
    </>
  )
}
storiesOf('动画 Transition', module)
  .add('Transition', DefaultTransition)
