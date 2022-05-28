import React, { Component, FC, ReactElement, cloneElement, useState, createContext, Dispatch, SetStateAction } from "react";
import { getPrefixCls, childrenToArray } from "@/utils";
import classNames from "classnames";
import KInput, { InputProps } from "../input";
import KOptions, { SelectorOptionProps } from "./Option";


export interface SelectorProps extends InputProps {
  children?: ReactElement<SelectorOptionProps>[]
}

type SelectorContextType = {
  setValue: Dispatch<SetStateAction<string | number>>
}

export const SelectorContext = createContext<SelectorContextType>(null)

const RowSelector: FC<SelectorProps> = props => {

  const { className, style, children, defaultValue, ...restProps } = props

  const [menuVis, setMenuVis] = useState<boolean>(false)

  const [value, setValue] = useState<string | number | readonly string[]>(defaultValue || '')
  const prefixCls = getPrefixCls('selector')

  const selectorCls = classNames(
    prefixCls,
    className
  )

  const selectorMenuCls = classNames(
    `${prefixCls}-menu`,
    {
      [`${prefixCls}-menu-hidden`]: !menuVis
    }
  )
  const child = childrenToArray(children).map((ele: ReactElement, index) => {
    if (!ele) return

    return cloneElement(ele, {
      key: index,
    })

  })

  return (
    <div className={selectorCls} style={{ ...style }}>
      <KInput
        className={`${prefixCls}-inner`}
        value={value}
        suffixIcon="angle-down"
        onFocus={() => setMenuVis(true)}
        onBlur={() => setMenuVis(false)}
        {...restProps}
      />

      <SelectorContext.Provider value={{
        setValue
      }}>
        <ul className={selectorMenuCls}>
          {child}
        </ul>
      </SelectorContext.Provider>
    </div>
  )

}

class KSeletor extends Component<SelectorProps, {}> {

  static Option: FC<SelectorOptionProps> = KOptions

  render() {
    return (
      <RowSelector {...this.props} />
    )
  }
}

export default KSeletor