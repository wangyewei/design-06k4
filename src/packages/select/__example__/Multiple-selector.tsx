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
        style={{ width: '450px', minWidth: '10px', margin: '14px' }}
        mode="multiple"
        defaultSelectedValue={['a1', 'a3']}
      >
        {
          renders.map((val, index) => <Option value={val.value} key={index.toString(36)}>{val.child}</Option>)
        }
      </KSelector>
    </>
  )
}