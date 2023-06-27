import React, { FC, memo, MutableRefObject, useState, ChangeEventHandler, useEffect, useContext } from "react";
import KIcon from "../icon";
import classNames from "classnames";
import { MultipleContext } from "./Select";

export interface MultipleInputProps {
  prefixCls: string,
  multipleInputRef: MutableRefObject<HTMLInputElement>,
  multipleInnerCls: string,
}


const KMultipleInput: FC<MultipleInputProps> = memo(props => {

  const { prefixCls, multipleInputRef, multipleInnerCls: className } = props

  const [focus, setFocus] = useState<boolean>(false)
  const [removeIndex, setRemoveIndex] = useState<number>(-1)

  // const [renderValueStack, setRenderValueStack] = useState<Array<{ value: string, index: number }>>(valueRenderStack)

  //////////  Value Stack State //////

  const {
    multipleValueStack,
    setMultipleValueStack,
    inputVal,
    setInputVal,
    setMultipleMenuShow,
  } = useContext(MultipleContext)

  ///////////////////////////////////

  useEffect(() => {
    if (removeIndex >= 0) {
      const _stack = []
      multipleValueStack.forEach((value, index) => {
        if (index !== removeIndex) {
          _stack.push(value)
        }
      })
      setMultipleValueStack(_stack)
      setRemoveIndex(-1)
    }
  }, [removeIndex])
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value
    setInputVal(val)
  }

  const multipleInnerCls = classNames(
    className,
    {
      [`${prefixCls}-multiple-inner-focus`]: focus
    }
  )

  const onFoucs = () => {
    multipleInputRef.current.focus()
    setFocus(true)
  }

  const onBlur = () => {
    multipleInputRef.current.blur()
    setFocus(false)
    setInputVal('')
  }
  return (
    <div tabIndex={0}
      className={multipleInnerCls}
      onFocus={onFoucs}
      onBlur={onBlur}
    >
      <div className={`${prefixCls}-multiple-inner-items`}>
        {multipleValueStack.map((val, index) => (
          <span
            className={`${prefixCls}-multiple-inner-item`}
            key={`${index.toString(36)}`}
            onMouseEnter={() => setMultipleMenuShow(true)}
            onMouseLeave={() => setMultipleMenuShow(false)}
          >
            <span className={`${prefixCls}-multiple-inner-item-content`}>{val}</span>
            <span className={`${prefixCls}-multiple-inner-item-icon`}
              onClick={() => {
                setRemoveIndex(index)
              }}
            >
              <KIcon icon="xmark" />
            </span>
          </span>
        ))}
        <span className={`${prefixCls}-multiple-inner-input`}>
          <div
            className={`${prefixCls}-multiple-inner-input-inner`}
          >
            <div>
              <span className={`${prefixCls}-multiple-inner-input-inner-child`}>{inputVal}</span>
              <span className={`${prefixCls}-multiple-inner-input-inner-caret`}>|</span>
            </div>
          </div>
          <input
            type="text"
            value={inputVal}
            className={`${prefixCls}-multiple-inner-input-value`}
            ref={multipleInputRef}
            onChange={onChange}
          />
        </span>

      </div>
    </div>
  )
})
export default KMultipleInput