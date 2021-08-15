import React from "react"
import { render, RenderResult } from "@testing-library/react"
// import Transition, { TransitionProps } from './Transition'

// const testProps: TransitionProps = {
//   animation: 'zoom-in-top',
//   wrapper: true,
//   addEndListener: undefined
// }

const generateTransition = (props?) => {
  return (

    <div>tt</div>

  )
}
let wrapper: RenderResult, transitionElement: HTMLElement
describe('App test is running', () => {
  beforeEach(() => {
    wrapper = render(generateTransition())
    transitionElement = wrapper.getByText('tt')
  })

  it('this component should be render', () => {
    expect(transitionElement).toBeInTheDocument()
  })
})