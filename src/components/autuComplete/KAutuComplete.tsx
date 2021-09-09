import React, { FC, useState, ChangeEvent, ReactElement } from "react";
import KInput, { KInputProps } from '../Input/KInput'

interface DataSourceObject {
  value: string;
  // login: string;
  // url: string;
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

  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])

  // console.log(suggestions)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const results = fetchSuggestions(value)
      if (results instanceof Promise) {
        console.log('trigger')
        results.then(data => {
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }

    } else {
      setSuggestions([])
    }
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
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default KAutuComplete;