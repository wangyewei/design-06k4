import React, { FC, memo, MutableRefObject, useState, ChangeEventHandler, useEffect } from "react";
import KIcon from "../icon";
import classNames from "classnames";
import useSelectorCls from "./hooks/useSelectorCls";

export interface MultipleInputProps {
  prefixCls: string,
  multipleInputRef: MutableRefObject<HTMLInputElement>,
  multipleInnerCls: string
}

const valueRenderStack = []

for (let i = 0; i < 9; i++) {
  valueRenderStack.push(`a${i}`)
}



const KMultipleInput: FC<MultipleInputProps> = memo(props => {

  const { prefixCls, multipleInputRef, multipleInnerCls: className } = props

  const [value, setValue] = useState<string>('')
  const [focus, setFocus] = useState<boolean>(false)
  const [removeIndex, setRemoveIndex] = useState<number>(-1)

  const [renderValueStack, setRenderValueStack] = useState<Array<{ value: string, index: number }>>(valueRenderStack)

  useEffect(() => {
    console.log(removeIndex)
    if (removeIndex >= 0) {
      const _stack = []
      renderValueStack.forEach((value, index) => {
        if (index !== removeIndex) {
          _stack.push(value)
        }
      })
      setRenderValueStack(_stack)
    }
  }, [removeIndex])
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value
    setValue(val)
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
  }
  return (
    <div tabIndex={0}
      className={multipleInnerCls}
      onFocus={onFoucs}
      onBlur={onBlur}
    >
      <div className={`${prefixCls}-multiple-inner-items`}>
        {renderValueStack.map((val, index) => (
          <span className={`${prefixCls}-multiple-inner-item`} key={`${index.toString(36)}`}>
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
              <span className={`${prefixCls}-multiple-inner-input-inner-child`}>{value}</span>
              <span className={`${prefixCls}-multiple-inner-input-inner-caret`}>|</span>
            </div>
          </div>
          <input
            type="text"
            value={value}
            className={`${prefixCls}-multiple-inner-input-value`}
            ref={multipleInputRef}
            onChange={onChange}
            onBlur={() => setValue('')} />
        </span>

      </div>
    </div>
  )
})
export default KMultipleInput