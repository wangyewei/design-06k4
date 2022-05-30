import React from "react";
import KSeletor from "../Select";

const { Option } = KSeletor
export default () => (
  <KSeletor
    defaultIndex={1}
    style={{ width: 'fit-content', minWidth: '10px', margin: '14px' }}
    input
  >
    <Option value="Yewei Wang">Yewei Wang </Option>
    <Option value="Yu">Yu</Option>
    <Option value="Beck" disabled>Beck</Option>
    <Option value="Muzhi Wang">Muzhi Wang</Option>
  </KSeletor>
)