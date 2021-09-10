import React, { FC, useState, ChangeEvent, ReactElement, useEffect } from "react";
import KInput, { KInputProps } from '../Input/KInput'
import KIcon from '../Icon/KIcon'
import useDebounce from '../../hooks/useDebounce'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<KInputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}


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

  const debouncedValue = useDebounce(inputValue, 500)
  useEffect(() => {
    if (debouncedValue) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }

    } else {
      setSuggestions([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) onSelect(item)
  }
  const renderTempalete = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index}
              onClick={() => handleSelect(item)}>
              {renderTempalete(item)}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="yewei-auto-complete">
      <KInput
        value={inputValue || ''}
        onChange={handleChange}
        {...restProps}
      />
      {loading && <ul><KIcon icon="spinner" spin /></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default KAutuComplete;