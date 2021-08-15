import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import KIcon from './KIcon'

const defaultIcon = () => (
  <KIcon icon="coffee"></KIcon>
)

const diffrentThemeIcon = () => (
  <>
    <KIcon icon="coffee" theme="success"></KIcon>
    <KIcon icon="coffee" theme="info"></KIcon>
    <KIcon icon="coffee" theme="primary"></KIcon>
    <KIcon icon="coffee" theme="warning"></KIcon>
    <KIcon icon="coffee" theme="danger"></KIcon>
    <KIcon icon="coffee" theme="dark"></KIcon>
    <KIcon icon="coffee" theme="light"></KIcon>
    <KIcon icon="coffee" theme="secondary"></KIcon>
  </>
)

storiesOf('字体图标 KIcon', module)
  .add('KIcon', defaultIcon)
  .add('不同主题的 KIcon', diffrentThemeIcon)