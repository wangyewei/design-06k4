import React, {
  Component,
  CSSProperties,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
  KeyboardEvent,
  ChangeEventHandler,
  useEffect
} from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KIcon, { IconProps } from "../icon";
import KButton from '@/packages/button/'
import LoadingIcon from '@/packages/button/LoadingIcon'

interface RowInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  className?: string,
  style?: CSSProperties,
  prefixIcon?: IconProps['icon'],
  suffixIcon?: IconProps['icon']
  size?: 'small' | 'middle' | 'large',
  addonBefore?: ReactNode,
  addonAfter?: ReactNode,
  onChange?: (value: string) => void,
  onPressEnter?: () => void
  rowType?: 'default' | 'search' | 'password',
}

interface SearchProps extends RowInputProps {
  onSearch?: () => void
  enterButton?: string,
  loading?: boolean
}

export type InputProps = SearchProps

const RowInput: FC<InputProps> = props => {

  const {
    className,
    style,
    prefixIcon,
    size = 'middle',
    addonBefore,
    addonAfter,
    onChange: propsOnChange,
    onInput,
    rowType = 'default',
    onSearch,
    enterButton,
    onKeyDown: propsOnKeyDown,
    onPressEnter,
    loading = false,
    ...restProps
  } = props

  const [_type, _setType] = useState<'text' | 'password' | 'search'>('text')



  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value
    propsOnChange && propsOnChange(val)
  }

  const rowOnSearch = () => {
    onSearch && onSearch()
  }

  const rowPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter && onPressEnter()
    }
  }

  const prefixCls = getPrefixCls('input')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-with-prefix`]: prefixIcon,
      [`${prefixCls}-${size}`]: size
    },
    className
  )


  const RowInputNode: FC<InputProps> = () => (
    <div className={cnames} style={{ ...style }} >
      {addonBefore && <div className={`${prefixCls}-addon-before ${prefixCls}-addon`}>{addonBefore}</div>}
      {prefixIcon && <KIcon icon={prefixIcon} className={`${prefixCls}-prefix`} />}
      <input
        type={_type}
        className={`${prefixCls}-inner`}
        onKeyDown={e => rowPressEnter(e)}
        onChange={onChange}
        {...restProps}
      />
      {rowType === 'search'
        && !enterButton
        &&
        <div className={`${prefixCls}-addon-after ${prefixCls}-addon`} onClick={() => rowOnSearch()}>
          {loading ? <LoadingIcon loading /> : <KIcon icon="search" />}
        </div>
      }
      {enterButton &&
        <KButton
          type="primary"
          className={`${prefixCls}-addon-button`}
          onClick={rowOnSearch}
          loading={loading}>
          {enterButton}
        </KButton>
      }
      {addonAfter && <div className={`${prefixCls}-addon-after ${prefixCls}-addon`}>{addonAfter}</div>}
    </div>
  )

  let InputFunctionComponent: FC<InputProps> = null;
  switch (rowType) {
    case 'default':
      InputFunctionComponent = RowInputNode
    case 'search':
      InputFunctionComponent = RowInputNode
    default:
      InputFunctionComponent = RowInputNode
  }
  return (
    <InputFunctionComponent />
  )

}

const KSearch: FC<SearchProps> = (props) => <RowInput rowType="search" {...props} />

class KInput extends Component<InputProps, {}> {

  static Search: FC<SearchProps> = KSearch

  render() {
    return (
      <RowInput {...this.props} />
    )
  }
}

export default KInput