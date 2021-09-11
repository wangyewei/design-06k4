import React from "react";
import { render, RenderResult, fireEvent, wait } from "@testing-library/react";
import { config } from "react-transition-group";
import KAutuComplete, { AutoCompleteProps } from './KAutuComplete'

config.disabled = true

const testArr = [
  { value: 'wangyewei', age: 21 },
  { value: 'pengyunjin', age: 22 },
  { value: 'kiko mizuhara', age: 28 },
  { value: 'boss x', age: 33 },
  { value: 'lucian', age: 40 },
]

const testProps: AutoCompleteProps = {
  fetchSuggestions: query => testArr.filter(item => item.value.includes(query)),
  onSelect: jest.fn(),
  placeholder: 'k-auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement
describe(' kAutoComplete component unit test', () => {

  beforeEach(() => {
    wrapper = render(<KAutuComplete {...testProps} />)
    inputNode = wrapper.getByPlaceholderText('k-auto-complete') as HTMLInputElement
  })
  it('should be render the basic component', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await wait(() => {
      expect(wrapper.queryByText('wangyewei')).toBeInTheDocument()
    })
    expect(wrapper.container.querySelectorAll('.yewei-suggestion-item').length).toEqual(3)
    fireEvent.click(wrapper.getByText('wangyewei'))
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'wangyewei', age: 21 })

    expect(wrapper.queryByText('wangyewei')).not.toBeInTheDocument()
  })

  it('should provide keyboard support', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await wait(() => {
      expect(wrapper.queryByText('wangyewei')).toBeInTheDocument()
    })
    const firstResult = wrapper.queryByText('wangyewei')
    const secondResult = wrapper.queryByText('kiko mizuhara')
    // const thirdResult = wrapper.queryByText('lucian')

    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(firstResult).toHaveClass('yewei-item-highlighted')
    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(secondResult).toHaveClass('yewei-item-highlighted')
    fireEvent.keyDown(inputNode, { key: 'ArrowUp' })
    expect(firstResult).toHaveClass('yewei-item-highlighted')

    fireEvent.keyDown(inputNode, { key: 'Enter' })
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'wangyewei', age: 21 })

    fireEvent.keyDown(inputNode, { key: 'Escape' })
    expect(wrapper.queryByText('wangyewei')).not.toBeInTheDocument()
  })

  it('click outside should hide the dropdown', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await wait(() => {
      expect(wrapper.queryByText('wangyewei')).toBeInTheDocument()
    })
    fireEvent.click(document)
    expect(wrapper.queryByText('wangyewei')).not.toBeInTheDocument()
  })

  //   it('renderOptions should generate the current tenplate', () => {

  //   })

  //   it('async fetchSuggestions should work', () => {

  //   })
})