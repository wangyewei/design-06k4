import React from "react";
import KMenu from "../";

const HoriMenu = () => {

  const { Item } = KMenu
  return (
    <KMenu defaultSelected="one">
      <Item itemKey="one" icon="cloud-bolt"> Navigation One</Item>
      <Item itemKey="two" icon="coffee"> Navigation two</Item>
    </KMenu>
  )
}

export default HoriMenu