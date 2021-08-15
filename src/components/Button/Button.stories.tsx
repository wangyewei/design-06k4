import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import KButton from './KButton'

const defaultButton = () => (
  <KButton onClick={action('clicked')}> default button </KButton>
)

const buttonWithSize = () => (
  <>
    <KButton size="lg"> large button </KButton>
    <KButton size="sm"> small button </KButton>
  </>
)

const buttonWithType = () => (
  <>
    <KButton btnType="primary"> primary button </KButton>
    <KButton btnType="danger"> danger button </KButton>
    <KButton btnType="link" href="https://google.com"> link button </KButton>
  </>
)
storiesOf('按钮 KButton', module)
  .add('KButton', defaultButton)
  .add('不同尺寸的 KButton', buttonWithSize)
  .add('不同类型的 KButton', buttonWithType)