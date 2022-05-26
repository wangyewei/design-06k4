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
  onPressEnter?: () => void,
  showCount?: boolean,
  rowType?: 'default' | 'search' | 'password',
}

interface SearchProps extends RowInputProps {
  onSearch?: () => void
  enterButton?: string,
  loading?: boolean
}

interface PasswordProps extends RowInputProps {
  visibilityToggle?: boolean
}

export type InputProps = SearchProps & PasswordProps

const RowInput: FC<InputProps> = props => {

  const {
    className,
    style,
    prefixIcon,
    suffixIcon,
    size = 'middle',
    addonBefore,
    addonAfter,
    defaultValue = '',
    onChange: propsOnChange,
    onInput,
    rowType = 'default',
    onSearch,
    enterButton,
    onKeyDown: propsOnKeyDown,
    onPressEnter,
    loading = false,
    visibilityToggle = true,
    showCount = false,
    maxLength,
    ...restProps
  } = props

  const [_type, _setType] = useState<'text' | 'password' | 'search'>('text')
  const [pwdVis, setPwdVis] = useState<boolean>(false)
  const [value, setValue] = useState<string | number | readonly string[]>(defaultValue)


  useEffect(() => {
    rowType === 'password' ? _setType('password') : _setType('text')
  }, [])

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value
    setValue(val)
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
      [`${prefixCls}-with-prefix`]: prefixIcon || suffixIcon || rowType === 'password' || showCount,
      [`${prefixCls}-${size}`]: size
    },
    className
  )

  const pwdIconClick = () => {
    setPwdVis(!pwdVis)
    pwdVis ? _setType('password') : _setType('text')
  }

  const suffix: ReactNode = (
    <span className={`${prefixCls}-suffix`}>
      {rowType === 'password' && visibilityToggle ? pwdVis ? <KIcon icon="eye-slash" onClick={() => pwdIconClick()} /> : <KIcon icon="eye" onClick={() => pwdIconClick()} /> : ''}
      {showCount && <span> {(value as string).length} / {maxLength}</span>}
    </span>
  )

  const RowInputNode: ReactNode = (
    <div className={cnames} style={{ ...style }} >
      {addonBefore && <div className={`${prefixCls}-addon-before ${prefixCls}-addon`}>{addonBefore}</div>}
      {prefixIcon && <KIcon icon={prefixIcon} className={`${prefixCls}-prefix`} />}
      <input
        type={_type}
        value={value}
        className={`${prefixCls}-inner`}
        onKeyDown={e => rowPressEnter(e)}
        onChange={onChange}
        maxLength={maxLength}
        {...restProps}
      />
      {suffix}
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

  let InputNode: ReactNode = null;
  switch (rowType) {
    case 'default':
      InputNode = RowInputNode
    case 'search':
      InputNode = RowInputNode
    default:
      InputNode = RowInputNode
  }
  return (
    <>
      {InputNode}
    </>
  )

}

const KSearch: FC<SearchProps> = props => <RowInput rowType="search" {...props} />

const KPassword: FC<SearchProps> = props => <RowInput rowType="password" {...props} />

class KInput extends Component<InputProps, {}> {

  static Search: FC<SearchProps> = KSearch

  static Password: FC<PasswordProps> = KPassword

  render() {
    return (
      <RowInput {...this.props} />
    )
  }
}

export default KInput