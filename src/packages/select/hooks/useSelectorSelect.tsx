import React, { useState, KeyboardEventHandler, Dispatch, SetStateAction } from "react";
export default (
  valueStack: Array<{
    value: string | number,
    disabled: boolean
  }>,
  setValue: Dispatch<SetStateAction<number | string>>,
  setMenuVis: Dispatch<SetStateAction<boolean>>,
) => {
  // >>>>> options setting 
  const [selectedOption, setSelectedOption] = useState<number>(-1)
  const [hoverOption, setHoverOption] = useState<number>(-1)

  const dfs = (currIndex: number, oritarion: 'down' | 'up' = "up") => {

    let res = currIndex
    if (res > valueStack.length - 1) return res - 1

    if (valueStack[currIndex].disabled) {
      dfs(currIndex + 1)
      oritarion === 'down' ? res++ : res--
    }

    return res
  }

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const target = e.key
    switch (target) {
      case 'ArrowDown':
        // It's too late to get the value of the newest hover-value
        hoverOption <= valueStack.length - 1 && setHoverOption(dfs((hoverOption + 1), 'down'))
        break;
      case 'ArrowUp':
        hoverOption >= 1 && setHoverOption(dfs(hoverOption - 1))
        break;
      case 'Enter':
        try {
          if (valueStack[hoverOption].value) {
            try {
              setValue(valueStack[hoverOption].value)
              setSelectedOption(hoverOption)
              setMenuVis(false)
            } catch (error) {
              // throw new Error('desing-06k4: cannot get current value', { cause: error })
            }
          }
        } catch (error) {
          // throw new Error('desing-06k4: cannot get current value', { cause: error })

          // console.warn(`design-06k4-warning: Foucs the option first please`)
        }
        break;
    }
  }

  return {
    selectedOption,
    setSelectedOption,
    hoverOption,
    setHoverOption,
    onKeyDown
  }
}