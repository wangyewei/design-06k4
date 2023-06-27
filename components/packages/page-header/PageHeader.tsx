import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KIcon, { IconProps } from "../icon";
import KBreadcrumb, { BreadcrumbProps } from '../breadcrunmb'


interface PageHeaderHeadProps {
  prefixCls?: string,
  backIcon?: IconProps['icon'] | boolean
  title?: ReactNode,
  subTitle?: ReactNode,
  onBack?: () => void,
  extra?: ReactNode | ReactNode[],
  tag?: ReactNode,
  avator?: string,
}

export interface PageHeaderProps extends PageHeaderHeadProps {
  className?: string,
  style?: CSSProperties,
  children?: ReactNode,
  breadcrumb?: BreadcrumbProps | ReactElement<typeof KBreadcrumb>,
  // routs?: BreadcrumbProps['routes'],
  breadcrumbRender?: (props: PageHeaderProps, defaultDom: ReactNode) => ReactNode;
}

const renderbreadcrumb = (crumb): ReactNode => <KBreadcrumb {...crumb} />

const headderRender = ({
  prefixCls,
  backIcon,
  title,
  subTitle,
  extra,
  tag,
  avator,
  onBack
}: PageHeaderHeadProps): ReactNode => {

  const innerCls: string = prefixCls + '-header'

  return (
    <div className={innerCls}>
      {
        backIcon !== false && !avator && (
          <KIcon icon={(backIcon as IconProps['icon'])} className={`${innerCls}-icon`} onClick={() => {
            onBack && onBack()
          }} />
        )
      }
      {
        avator && <img src={avator} className={`${innerCls}-avator`} />
      }
      {title && <div className={`${innerCls}-title`}>{title}</div>}
      {subTitle && <div className={`${innerCls}-sub-title`}>{subTitle}</div>}
      {tag && tag}
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
    breadcrumbRender,
    tag,
    avator,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('page-header')

  const cnames = classNames(
    prefixCls,
    className
  )

  const getDefaultBreadcrumbDom = () => {
    if ((breadcrumb as BreadcrumbProps)?.routes) {
      return renderbreadcrumb(breadcrumb as BreadcrumbProps);
    }
    return null
  }

  const defaultBreadcrumbDom = getDefaultBreadcrumbDom()

  const isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb

  const breadcrumbRenderDomFromProps =
    breadcrumbRender?.(props, defaultBreadcrumbDom) ?? defaultBreadcrumbDom

  const breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps
  return (
    <div className={cnames} style={{ ...style }} {...restProps}>
      {breadcrumbDom}
      {headderRender({ prefixCls, backIcon, title, subTitle, extra, tag, avator, onBack })}
      {children}
    </div>
  )
}

export default KPageHeader