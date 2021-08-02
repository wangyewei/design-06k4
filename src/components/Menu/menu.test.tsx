import React from "react";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";

import Menu, { MenuProps } from './Menu'
import MenuItem from './MenuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const verTestProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
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
    </Menu>
  )
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElment: HTMLElement, disabledElment: HTMLElement
describe('test Menu and MeniItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElment = wrapper.getByText('active')
    disabledElment = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on defalut props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('yewei-menu')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElment).toHaveClass('yewei-menu-item is-active')
    expect(disabledElment).toHaveClass('yewei-menu-item is-disabled')
  })

  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('normal')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElment).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElment)
    expect(disabledElment).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('should render vertical mode wen mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(verTestProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('yewei-menu-vertical')
  })
})