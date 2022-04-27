import React from "react";
import KBreadcrumb from "..";
import KIcon from "@/packages/icon";

const BasicBreadcrumb = () => {

  const { Item } = KBreadcrumb
  return (
    <>
      <KBreadcrumb>
        <Item>Home Page</Item>
        <Item><a href="">Applocation Center</a></Item>
        <Item><a href="">Applocation Center</a></Item>
        <Item>An Applocation</Item>
      </KBreadcrumb>

      <KBreadcrumb>
        <Item>
          <KIcon icon="house" />
        </Item>
        <Item>
          <a href="">
            <KIcon icon="user" />
            User Center
          </a>
        </Item>
        <Item>
          <KIcon icon="gear" />
          User Setting
        </Item>
      </KBreadcrumb>
    </>
  )
}

export default BasicBreadcrumb