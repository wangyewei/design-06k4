import React from "react";
import KBreadcrumb from "..";

const BasicBreadcrumb = () => {

  const { Item } = KBreadcrumb
  return (
    <KBreadcrumb>
      <Item>Home Page</Item>
      <Item><a href="">Applocation Center</a></Item>
      <Item><a href="">Applocation Center</a></Item>
      <Item>An Applocation</Item>
    </KBreadcrumb>
  )
}

export default BasicBreadcrumb