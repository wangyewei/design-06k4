import React from "react";
import { fireEvent, render } from "@testing-library/react";
import KInput, { KInputProps } from './KInput'

const defaultProps = {
  onClick: jest.fn(),
  placeholder: 'default'
}

const lgInputProps: KInputProps = {
  size: 'lg',
  placeholder: 'lgsizeinput'
}

const disabledInputProps: KInputProps = {
  disabled: true,
  placeholder: 'disabledinput'
}

const prependInputProps: KInputProps = {
  placeholder: 'prepend',
  prepend: 'prepend'
}

describe('test k-input component', () => {
  it('should render the correct default input', () => {
    const wrapper = render(<KInput {...defaultProps} />)
    const element = wrapper.getByPlaceholderText('default') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('INPUT')
    expect(element).toHaveClass('yewei-input-inner')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the large size input', () => {
    const wrapper = render(<KInput {...lgInputProps} />)
    const element = wrapper.getByPlaceholderText('lgsizeinput') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element.parentElement).toHaveClass('yewei-input-lg')
  })

  it('should render the disabled input', () => {
    const wrapper = render(<KInput {...disabledInputProps} />)
    const element = wrapper.getByPlaceholderText('disabledinput') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element).toBeDisabled()
    expect(element.parentElement).toHaveClass('is-disabled')
  })

  it('should render the input with prepend', () => {
    const wrappepr = render(<KInput {...prependInputProps} />)
    const element = wrappepr.getByPlaceholderText('prepend') as HTMLInputElement
    const prenpendEl = element.previousElementSibling
    expect(prenpendEl?.innerHTML).toEqual('prepend')
  })

})