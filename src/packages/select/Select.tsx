import React, {
  Component,
  FC,
  ReactElement,
  cloneElement,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect
} from "react";
import { getPrefixCls, childrenToArray } from "@/utils";
import classNames from "classnames";
import KInput, { InputProps } from "../input";
import KOptions, { SelectorOptionProps } from "./Option";
import useSelectorSelect from "./hooks/useSelectorSelect";


export interface SelectorProps extends InputProps {
  children?: ReactElement<SelectorOptionProps>[],
  defaultIndex?: number,
}

type SelectorContextType = {
  setValue: Dispatch<SetStateAction<string | number>>,
  selectedOption: number,
  setSelectedOption: Dispatch<SetStateAction<number>>,
  hoverOption: number,
  setHoverOption: Dispatch<SetStateAction<number>>
}

export const SelectorContext = createContext<SelectorContextType>(null)

const RowSelector: FC<SelectorProps> = props => {

  const { className, style, children, defaultValue, defaultIndex, ...restProps } = props

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
  const valueStack: Array<{
    value: string | number,
    disabled: boolean
  }> = []
  const child = childrenToArray(children).map((ele: ReactElement<SelectorOptionProps>, index) => {
    if (!ele) return

    valueStack.push({
      value: ele.props.value,
      disabled: ele.props.disabled || false
    })
    return cloneElement(ele, {
      key: index,
      index
    })

  })
  // default-value didMounted
  useEffect(() => {
    if (defaultIndex >= 0 && defaultIndex <= valueStack.length) {
      setValue(valueStack[defaultIndex].value)
      setSelectedOption(defaultIndex)
    }
  }, [defaultIndex])

  // privite hooks
  const {
    selectedOption,
    setSelectedOption,
    hoverOption,
    setHoverOption,
    onKeyDown
  } = useSelectorSelect(valueStack, setValue, setMenuVis)

  return (
    <div
      className={selectorCls}
      style={{ ...style }}
      onKeyDown={onKeyDown}
    >
      <KInput
        className={`${prefixCls}-inner`}
        value={value}
        suffixIcon="angle-down"
        onFocus={() => setMenuVis(true)}
        onBlur={() => setMenuVis(false)}
        onClick={() => setMenuVis(true)}
        loading={false}
        {...restProps}
      />

      <SelectorContext.Provider value={{
        setValue,
        selectedOption,
        setSelectedOption,
        hoverOption,
        setHoverOption
      }}>
        <ul className={selectorMenuCls}>
          {child}
        </ul>
      </SelectorContext.Provider>
    </div>
  )

}

class KSelector extends Component<SelectorProps, {}> {

  static Option: FC<SelectorOptionProps> = KOptions

  render() {
    return (
      <RowSelector {...this.props} />
    )
  }
}

export default KSelector