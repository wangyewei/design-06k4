import React from 'react';
// import { KInput, KIcon, KDropdown } from 'design-06k4';
import KInput from '../Input';
import KIcon from '@/packages/icon';
import KDropdown from '@/packages/dorpdown';

const { Menu, Item } = KDropdown;
const Dropdown = () => (
  <KDropdown title="DropDown">
    <Menu arrow>
      <Item>A base drop down item</Item>
      <Item disabled>A disabled drop down item</Item>
      <Item disabled>
        <KIcon icon="coffee" /> A disabled drop down item with icon
      </Item>
      <Item danger>A danger drop down item</Item>
    </Menu>
  </KDropdown>
);

export default () => (
  <>
    <KInput
      placeholder="06k4"
      addonBefore="https://"
      addonAfter=".com"
      style={{ width: '350px', margin: '12px' }}
      onChange={e => console.log(e)}
    />
    <KInput
      placeholder="My Site"
      addonAfter={<KIcon icon="gear" />}
      style={{ width: '350px', margin: '12px' }}
    />
    <KInput
      placeholder="My Site"
      addonBefore={<Dropdown />}
      style={{ width: '350px', margin: '12px' }}
    />

  </>
);