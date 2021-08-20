import React from "react";
import { render } from "@testing-library/react";
import KInput, { KInputProps } from './KInput'

const defaultProps = {
  onClick: jest.fn(),
  placeholder: 'default'
}

describe('test k-input component', () => {
  it('should render the correct default input', () => {
    const wrapper = render(<KInput {...defaultProps} />)
    const element = wrapper.getByPlaceholderText('default') as HTMLInputElement
    expect(element).toBeInTheDocument()
  })
})