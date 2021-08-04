import React from "react";
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Welcom',
}

export const welcome = () => (
  <Welcome></Welcome>
)
export const myButton = () => (
  <Button>this is my button</Button>
)
