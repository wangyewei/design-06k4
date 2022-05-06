import React from "react";
import KDropdown from "../Dropdown";
import KButton from "@/packages/button";
import KIcon from "@/packages/icon";

const BasicDropDown = () => {

  const { Menu, Item } = KDropdown
  return (
    <div style={{ padding: '20px', background: '#000' }}>
      <KDropdown title={<KButton type="primary">Hover Me</KButton>}>
        <Menu>
          <Item>A base drop down item</Item>
          <Item disabled>A disabled drop down item</Item>
          <Item disabled><KIcon icon="coffee" /> A disabled drop down item with icon</Item>
          <Item danger>A danger drop down item</Item>
        </Menu>
      </KDropdown>
      <div>Should be covered</div>

      <KDropdown
        title={<KButton type="primary">Click Me</KButton>}
        trigger="click">
        <Menu arrow>
          <Item>A base drop down item</Item>
          <Item disabled>A disabled drop down item</Item>
          <Item disabled><KIcon icon="coffee" /> A disabled drop down item with icon</Item>
          <Item danger>A danger drop down item</Item>
        </Menu>
      </KDropdown>


      <KDropdown title={<KButton type="primary">Hover Me</KButton>} >
        <Menu arrow>
          <Item>A base drop down item</Item>
          <Item disabled>A disabled drop down item</Item>
          <Item disabled><KIcon icon="coffee" /> A disabled drop down item with icon</Item>
          <Item danger>A danger drop down item</Item>
        </Menu>
      </KDropdown>
      {/* <div>Should be covered</div> */}

    </div>


  )
}

export default BasicDropDown