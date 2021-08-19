import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions'

import KInput from "./KInput";

const defaultInput = () => (
  <KInput
    style={{ width: '300px' }}
    placeholder="安全、美观的输入框" />
)

const disabledInput = () => (
  <KInput style={{ width: '300px' }} placeholder="被禁用的input" disabled />
)

const diffrentSizeInput = () => (
  <div style={{ width: '430px' }}>
    <KInput
      defaultValue="大号的输入框"
      size="lg" />
    <KInput
      defaultValue="小号的输入框"
      size="sm" />
    <KInput defaultValue="默认的输入框" />
  </div>
)

const iconInput = () => (
  <KInput
    style={{ width: '300px' }}
    icon="search"
    placeholder="带icon图标的输入框" />
)

const apendInput = () => (
  <div style={{ width: "430px" }}>
    <p>带前缀</p>
    <KInput
      prepend="https://" />
    <p>带后缀</p>
    <KInput
      append=".com" />
  </div>
)

storiesOf('输入框 KIpunt', module)
  .add('KInput', defaultInput)
  .add('不同尺寸的输入框', diffrentSizeInput)
  .add('被禁用的输入框', disabledInput)
  .add('带icon图标的输入框', iconInput)
  .add("带前后缀的Input", apendInput)