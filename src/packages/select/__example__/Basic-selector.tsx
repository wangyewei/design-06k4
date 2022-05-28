import React from "react";
import KSeletor from "../Select";

const { Option } = KSeletor
export default () => (
  <KSeletor
    style={{ width: '150px', margin: '14px' }}
  >
    <Option>Yewei Wang</Option>
    <Option>Yu</Option>
    <Option>Muzhi Wang</Option>
  </KSeletor>
)