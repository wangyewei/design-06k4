import React from "react";
import { render, fireEvent } from "@testing-library/react";
import KButton, { ButtonProps, ButtonSize, ButtonType } from "./KButton";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}
describe('test KButton component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<KButton {...defaultProps}>Nice</KButton>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the corrent conmponent based on different props', () => {
    const wrapper = render(<KButton {...testProps}>Nice</KButton>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg class')
  })

  it('should render a link when btnTypes quals link and href is provided', () => {
    const wrapper = render(<KButton btnType={ButtonType.Link} href="https://github.com/WangYeWei/YeweiDesign_ts_react/">Link</KButton>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<KButton {...disabledProps}>Nice</KButton>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})