import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KIcon, { IconProps } from "../icon";
import KBreadcrumb, { BreadcrumbProps } from '../breadcrunmb'


interface PageHeaderHeadProps {
  prefixCls?: string,
  backIcon?: IconProps['icon']
  title?: ReactNode,
  subTitle?: ReactNode,
  onBack?: () => void,
  extra?: ReactNode | ReactNode[],
  breadcrumb?: BreadcrumbProps | ReactElement<typeof KBreadcrumb>
}

export interface PageHeaderProps extends PageHeaderHeadProps {
  className?: string,
  style?: CSSProperties,
  children?: ReactNode
}

const breadCrumbRender = (crumb): ReactNode => <KBreadcrumb {...crumb} />

const headderRender = ({
  prefixCls,
  backIcon,
  title,
  subTitle,
  extra,
  onBack
}: PageHeaderHeadProps): ReactNode => {

  const innerCls: string = prefixCls + '-header'

  return (
    <div className={innerCls}>
      <KIcon icon={backIcon} className={`${innerCls}-icon`} onClick={() => {
        onBack && onBack()
      }} />
      {title && <div className={`${innerCls}-title`}>{title}</div>}
      {subTitle && <div className={`${innerCls}-sub-title`}>{subTitle}</div>}

      <div className={`${innerCls}-extra`}>{
        extra && Array.isArray(extra) ? extra.map((node) => node) : extra
      }</div>
    </div>
  )
}


const KPageHeader: FC<PageHeaderProps> = props => {
  const {
    className,
    style,
    backIcon = 'arrow-left',
    title,
    subTitle,
    extra,
    onBack,
    breadcrumb,
    children,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('page-header')

  const cnames = classNames(
    prefixCls,
    className
  )

  return (
    <div className={cnames} style={{ ...style }} {...restProps}>
      {headderRender({ prefixCls, backIcon, title, subTitle, extra, onBack })}
      {children}
    </div>
  )
}

export default KPageHeader