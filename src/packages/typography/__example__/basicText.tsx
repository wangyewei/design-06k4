import React from "react";
import KTypography from "..";
import KDivider from "@/packages/divider";
const { Text, Link } = KTypography

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
      <br />
      <Text disabled>design 06k4 (disabled)</Text>
      <br />
      <Text mark>design 06k4 (mark)</Text>
      <br />
      <Text underline>design 06k4 (underline)</Text>
      <br />
      <Text isDelete>design 06k4 (delete)</Text>
      <br />
      <Text strong>design 06k4 (strong)</Text>
      <br />
      <Text italic>design 06k4 (italic)</Text>
      <br />
      <Link href="https://06k4.com">design 06k4 (Link)</Link>
    </>
  )
}

export default BasicText