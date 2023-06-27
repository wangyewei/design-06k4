import React from "react";
import KTypography from "..";
const { Title } = KTypography
const BasicTitle = () => {

  return (
    <>
      <Title level={1}>1级标题</Title>
      <Title level={2}>2级标题</Title>
      <Title level={3}>3级标题</Title>
      <Title level={4}>4级标题</Title>
      <Title level={5}>5级标题</Title>
      <Title level={6}>6级标题</Title>
    </>
  )
}

export default BasicTitle