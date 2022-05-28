import React from "react";
import KSeletor from "../Select";

const { Option } = KSeletor
export default () => (
  <KSeletor
    style={{ width: '150px', margin: '14px' }}
  >
    <Option value="Yewei Wang">Yewei Wang</Option>
    <Option value="Yu">Yu</Option>
    <Option value="Muzhi Wang">Muzhi Wang</Option>
  </KSeletor>
)