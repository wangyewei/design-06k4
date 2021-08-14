import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Icon from './Icon'

const defaultIcon = () => (
  <Icon icon="coffee"></Icon>
)

const diffrentThemeIcon = () => (
  <>
    <Icon icon="coffee" theme="success"></Icon>
    <Icon icon="coffee" theme="info"></Icon>
    <Icon icon="coffee" theme="primary"></Icon>
    <Icon icon="coffee" theme="warning"></Icon>
    <Icon icon="coffee" theme="danger"></Icon>
    <Icon icon="coffee" theme="dark"></Icon>
    <Icon icon="coffee" theme="light"></Icon>
    <Icon icon="coffee" theme="secondary"></Icon>
  </>
)

storiesOf('字体图标 Icon', module)
  .add('Icon', defaultIcon)
  .add('不同主题的 Icon', diffrentThemeIcon)