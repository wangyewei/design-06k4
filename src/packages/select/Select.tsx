import React, {
  Component,
  FC,
  ReactElement,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  memo,
  ReactNode,
  useRef
} from "react";
import { getPrefixCls, childrenToArray } from "@/utils";
import KInput, { InputProps } from "../input";
import KOptions, { SelectorOptionProps } from "./Option";
import KIcon from '../icon'
import KTransition from "@/packages/transition";
import useSelectorSelect from "./hooks/useSelectorSelect";
import useSelectorCls from "./hooks/useSelectorCls";
import { isNumber, isString } from "@/utils/typeUtils";

const { Fold } = KTransition

export interface SelectorProps extends InputProps {
  children?: ReactElement<SelectorOptionProps>[],
  defaultIndex?: number,
  input?: boolean,
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

  const { className, style, children, defaultValue, defaultIndex, input = false, ...restProps } = props

  const [menuVis, setMenuVis] = useState<boolean>(false)

  const [value, setValue] = useState<string | number | readonly string[]>(defaultValue || '')

  const [inputVal, setInputVal] = useState<string | number | readonly string[]>(defaultValue || '')

  const ref = useRef<HTMLUListElement>(null)
  const prefixCls = getPrefixCls('selector')

  /////////////// class-name ////////

  const { selectorCls, selectorMenuCls, selectorInnerCls } = useSelectorCls(prefixCls, className, { menuVis, input })

  ///////////////////////////////////

  ///////////// render the value stack ////////
  const valueStack: Array<{
    value: string | number,
    disabled: boolean,
    children: ReactNode
  }> = []

  childrenToArray(children).forEach((ele: ReactElement<SelectorOptionProps>) => {
    if (!ele) return
    // console.log(ele)
    valueStack.push({
      value: ele.props.value,
      disabled: ele.props.disabled || false,
      children: ele.props.children
    })
  })

  const valueRenderStack: Array<{
    value: string | number,
    disabled: boolean,
    children: ReactNode
  }> = useMemo(() => {
    let _stack: Array<{ value: string | number, disabled: boolean, children: ReactNode }> = []
    if (input) {
      const filterStack = [];
      [...valueStack].filter(val => {
        if (isNumber(val.value) && isNumber(inputVal)) {
          val.value.toString().includes(`${inputVal}`) && filterStack.push(val)
        }
        if (isString(val.value) && isString(inputVal)) {
          val.value.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase()) && filterStack.push(val)
        }
      })

      _stack = filterStack
    } else {
      _stack = [...valueStack]
    }
    return _stack

  }, [valueStack, inputVal])

  //////////////////////////////////


  // default-value didMounted
  useEffect(() => {
    if (defaultIndex >= 0 && defaultIndex <= valueRenderStack.length) {
      setValue(valueRenderStack[defaultIndex].value)
      setSelectedOption(defaultIndex)
    }
  }, [defaultIndex])

  useEffect(() => {
    setInputVal(value)
  }, [value])

  useEffect(() => {
    // O(n)
    valueRenderStack.forEach((val, index) => {
      if (val.value === value) {
        console.log(valueRenderStack)
        setSelectedOption(index)
        return;
      }
    })
    if (ref.current !== null) {
      // Waiting for the fold adnimation done.
      setTimeout(() => {
        if (ref.current) ref.current.style.height = `fit-content`
      }, 300)
    }
  }, [valueRenderStack.length])


  ////////// Interaction Hooks  //////////
  const {
    selectedOption,
    setSelectedOption,
    hoverOption,
    setHoverOption,
    onKeyDown
  } = useSelectorSelect(valueRenderStack, setValue, setMenuVis)


  const contextValue: SelectorContextType = {
    setValue,
    selectedOption,
    setSelectedOption,
    hoverOption,
    setHoverOption
  } as const

  return (
    <div
      className={selectorCls}
      style={{ ...style }}
      onKeyDown={onKeyDown}
    >
      <KInput
        className={selectorInnerCls}
        value={value}
        suffixIcon="angle-down"
        onFocus={() => setMenuVis(true)}
        onBlur={() => {
          // Waiting for the value changed
          setTimeout(() => {
            setMenuVis(false)
          }, 300)
        }}
        onClick={() => setMenuVis(true)}
        onChange={val => setValue((val as unknown as string))}
        loading={false}
        {...restProps}
      />

      <SelectorContext.Provider value={contextValue}>
        <Fold show={menuVis}>
          <ul className={selectorMenuCls} ref={ref}>
            {valueRenderStack.length ?
              valueRenderStack.map((val, index) => (
                <KOptions
                  value={val.value}
                  key={val.value.toString(32)}
                  index={index}
                  disabled={val.disabled}>
                  {val.children}
                </KOptions>
              ))
              :
              <KOptions disabled value="cannot select" emptyData><KIcon icon="box-open" /><span>暂无数据</span></KOptions>
            }
          </ul>
        </Fold>

      </SelectorContext.Provider>
    </div>
  )

}

const BasedSelector = memo(RowSelector)

class KSelector extends Component<SelectorProps, {}> {

  static Option: FC<SelectorOptionProps> = KOptions

  render() {
    return (
      <BasedSelector {...this.props} />
    )
  }
}


export default KSelector