import React, { FC, useState, ChangeEvent, ReactElement, useEffect, KeyboardEvent, useRef } from "react";
import classNames from "classnames";
import KInput, { KInputProps } from '../Input/KInput'
import KIcon from '../Icon/KIcon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'
import KTransition from '../Transition/KTransition'
interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<KInputProps, 'onSelect'> {
  /**设置输入框接受的数据*/
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  /**选中事件回调函数 */
  onSelect?: (item: DataSourceType) => void;
  /**自定义列表模板 */
  renderOption?: (item: DataSourceType) => ReactElement;
}

/**
 * 自动填充的输入框
 * ### 引用方法
 * 
 * ~~~js
 * import { KAutuComplete } from '06k4-design'
 * ~~~
 */
export const KAutuComplete: FC<AutoCompleteProps> = (props?) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [showDropdown, setShowDropdown] = useState(false)
  const triggerSeaech = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    if (debouncedValue && triggerSeaech.current) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length) setShowDropdown(true)
        })
      } else {
        setSuggestions(results)
        setShowDropdown(true)
        if (results.length) setShowDropdown(true)
      }

    } else {
      setShowDropdown(false)
      // setSuggestions([])
    }
    setHighlightIndex(-1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSeaech.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    // setSuggestions([])
    setShowDropdown(false)
    if (onSelect) onSelect(item)
    triggerSeaech.current = false
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      case 'Escape':
        setShowDropdown(false)
        // setSuggestions([])
        break
      default:
        break
    }
  }

  const renderTempalete = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <KTransition in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => { setSuggestions([]) }}>
        <ul className="yewei-suggestion-list">
          {loading && <div className="suggestions-loading-icon">
            <KIcon icon="spinner" spin />
          </div>}
          {suggestions.map((item, index) => {
            const cnames = classNames('yewei-suggestion-item', {
              'yewei-item-highlighted': index === highlightIndex
            })
            return (
              <li key={JSON.stringify(item)}
                className={cnames}
                onClick={() => handleSelect(item)}>
                {renderTempalete(item)}
              </li>
            )
          })}
        </ul>
      </KTransition>

    )
  }
  return (
    <div className="yewei-auto-complete" ref={componentRef}>
      <KInput
        value={inputValue || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {/* {loading && <ul><KIcon icon="spinner" spin /></ul>} */}
      {generateDropdown()}
    </div>
  )
}

export default KAutuComplete;