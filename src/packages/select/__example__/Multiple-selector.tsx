import React from "react";
import KSelector from "../Select";
const { Option } = KSelector
export default () => {

  const renders = []
  for (let i = 0; i < 100; i++) {
    renders.push({
      value: `a${i}`,
      child: `a${i}`
    })
  }

  return (
    <>
      <KSelector
        defaultIndex={1}
        style={{ width: 'fit-content', minWidth: '10px', margin: '14px' }}
        input
      >
        <Option value="Yewei Wang">Yewei Wang </Option>
        <Option value="Yu">Yu</Option>
        <Option value="Beck" disabled>Beck</Option>
        <Option value="Muzhi Wang">Muzhi Wang</Option>
      </KSelector>
      <KSelector
        style={{ width: '450px', minWidth: '10px', margin: '14px' }}
        mode="multiple"
      >
        {
          renders.map((val, index) => <Option value={val.value} key={index.toString(36)}>{val.child}</Option>)
        }
        {/* <Option value="Yewei Wang">Yewei Wang </Option>
      <Option value="Yu">Yu</Option>
      <Option value="Beck" disabled>Beck</Option>
      <Option value="Muzhi Wang">Muzhi Wang</Option> */}
      </KSelector>
    </>
  )
}