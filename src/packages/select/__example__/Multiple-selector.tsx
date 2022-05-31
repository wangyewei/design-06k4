import React from "react";
import KSelector from "../Select";
const { Option } = KSelector
export default () => (
  <KSelector
    defaultIndex={1}
    style={{ width: '450px', minWidth: '10px', margin: '14px' }}
    mode="mutiple"
  >
    <Option value="Yewei Wang">Yewei Wang </Option>
    <Option value="Yu">Yu</Option>
    <Option value="Beck" disabled>Beck</Option>
    <Option value="Muzhi Wang">Muzhi Wang</Option>
  </KSelector>
)