import React, {
  Component,
  CSSProperties,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
  KeyboardEvent,
  ChangeEventHandler,
  useEffect,
  TextareaHTMLAttributes
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
  status?: 'warning' | 'error',
  rowType?: 'default' | 'search' | 'password' | 'textarea',
  suffix?: ReactNode
}

interface SearchProps extends RowInputProps {
  onSearch?: () => void
  enterButton?: string,
  loading?: boolean
}

interface PasswordProps extends RowInputProps {
  visibilityToggle?: boolean
}

type TextAreaProps = RowInputProps & Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  keyof InputHTMLAttributes<HTMLInputElement>
> & {
}



export type InputProps = SearchProps & PasswordProps & TextAreaProps

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
    status,
    maxLength,
    suffix: PropsSuffix,
    ...restProps
  } = props

  const [_type, _setType] = useState<'text' | 'password' | 'search'>('text')
  const [pwdVis, setPwdVis] = useState<boolean>(false)
  const [value, setValue] = useState<string | number | readonly string[]>(defaultValue)


  useEffect(() => {
    rowType === 'password' ? _setType('password') : _setType('text')
  }, [])

  const onChange: ChangeEventHandler<HTMLInputElement> | ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const val = e.target.value
    setValue(val)
    propsOnChange && propsOnChange(val)
  }

  const rowOnSearch = () => {
    onSearch && onSearch()
  }

  const rowPressEnter = (e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      onPressEnter && onPressEnter()
    }
  }

  const prefixCls = getPrefixCls('input')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-with-prefix`]: prefixIcon || suffixIcon || rowType === 'password' || showCount || PropsSuffix,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${status}`]: status && status
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
      {PropsSuffix && PropsSuffix}
    </span>
  )


  const RowInputNode: ReactNode = (
    <div className={cnames} style={{ ...style }} >
      {addonBefore && <div className={`${prefixCls}-addon-before ${prefixCls}-addon`}>{addonBefore}</div>}
      {prefixIcon && <KIcon icon={prefixIcon} className={`${prefixCls}-prefix`} />}
      {
        rowType !== 'textarea' &&
        <input
          type={_type}
          value={value}
          className={`${prefixCls}-inner`}
          onKeyDown={e => rowPressEnter(e)}
          onChange={(onChange as ChangeEventHandler<HTMLInputElement>)}
          maxLength={maxLength}
          {...restProps}
        />
      }
      {
        rowType === 'textarea' &&
        <textarea
          className={`${prefixCls}-inner`}
          value={value}
          onChange={(onChange as ChangeEventHandler<HTMLTextAreaElement>)}
          onKeyDown={e => rowPressEnter(e)}
          {...(restProps as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      }
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

  return (
    <>{RowInputNode}</>
  )
}

const KSearch: FC<SearchProps> = props => <RowInput rowType="search" {...props} />

const KPassword: FC<SearchProps> = props => <RowInput rowType="password" {...props} />

const KTextArea: FC<TextAreaProps> = props => <RowInput rowType="textarea" {...props} />

class KInput extends Component<InputProps, {}> {

  static Search: FC<SearchProps> = KSearch

  static Password: FC<PasswordProps> = KPassword

  static TextArea: FC<TextAreaProps> = KTextArea

  render() {
    return (
      <RowInput {...this.props} />
    )
  }
}

export default KInput