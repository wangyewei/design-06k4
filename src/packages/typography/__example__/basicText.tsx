import React from "react";
import KTypography from "..";
import KDivider from "@/packages/divider";
const { Text } = KTypography

const BasicText = () => {
  return (
    <>
      <KDivider oritation="left">文字类型</KDivider>
      <Text>design 06k4 (default)</Text>
      <br />
      <Text type="secondary">design 06k4 (secondary)</Text>
      <br />
      <Text type="success">design 06k4 (success)</Text>
      <br />
      <Text type="warning">design 06k4 (warning)</Text>
      <br />
      <Text type="danger">design 06k4 (danger)</Text>
    </>
  )
}

export default BasicText