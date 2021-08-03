import React from "react";
import { cleanup, fireEvent, render, RenderResult, waitFor } from "@testing-library/react";

import Menu, { MenuProps } from './Menu'
import MenuItem from './MenuItem'
import SubMenu from "./SubMenu";

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const verTestProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['4']
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        normal
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyleFile = () => {
  const cssFile: string = `
    .yewei-submenu {
      display: none;
    }
    .yewei-submenu.yewei-menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, wrapper2: RenderResult, menuElement: HTMLElement, activeElment: HTMLElement, disabledElment: HTMLElement
describe('test Menu and MeniItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElment = wrapper.getByText('active')
    disabledElment = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on defalut props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('yewei-menu')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElment).toHaveClass('yewei-menu-item is-active')
    expect(disabledElment).toHaveClass('yewei-menu-item is-disabled')
  })

  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('normal')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElment).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElment)
    expect(disabledElment).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  it('should render vertical mode wen mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(verTestProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('yewei-menu-vertical')
  })
  it('should show dropdown items when houver on SubMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElenment = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElenment)
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElenment)
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
  })
})

describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(verTestProps))
    wrapper2.container.append(createStyleFile())
  })

  it('should render vertical mdoe when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('test-menu')
    expect(menuElement).toHaveClass('yewei-menu-vertical')
  })

  it('should show dropdown items when click on submenu for vertical mode', () => {
    const dropDownItem = wrapper2.queryByText('drop1')
    expect(dropDownItem).not.toBeVisible()
    fireEvent.click(wrapper2.getByText('dropdown'))
    expect(dropDownItem).toBeVisible()
  })

  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper2.queryByText('opened1')).toBeVisible()
  })
})