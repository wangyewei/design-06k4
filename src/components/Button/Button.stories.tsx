import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from './Button'
const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
)
const diffrentSizeButton = () => (
  <>
    <Button size="lg">A Large Button</Button>
    <Button size="sm">A Small Button</Button>
  </>
)

const diffrentTypeButton = () => (
  <>
    <Button btnType="danger">A danger Button</Button>
    <Button btnType="primary">A primary Button</Button>
    <Button btnType="default">A default Button</Button>
    <Button btnType="link" href="https://github/wangyewei">A link Button</Button>
  </>
)

storiesOf('Button Component', module)
  .add('默认 button', defaultButton).add('不同尺寸 button', diffrentSizeButton).add('不同类型 button', diffrentTypeButton)