import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions'

import KInput from "./KInput";

const defaultInput = () => (
  <KInput />
)

storiesOf('输入框 KIpunt', module)
  .add('KInput', defaultInput)