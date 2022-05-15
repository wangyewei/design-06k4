import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, MouseEvent, useState } from "react";
import KIcon from "../icon";

export interface PaginationProps {
  className?: string,
  style?: CSSProperties,
  current?: number,
  defaultCurrent?: number,
  defaultPageSize?: number,
  total?: number,
}

const KPagination: FC<PaginationProps> = props => {
  const {
    className,
    style,
    current,
    defaultCurrent = 1,
    defaultPageSize = 10,
    total,
    ...restProps } = props

  const [currentPage, setCurrentPage] = useState<number>(defaultCurrent)

  const prefixCls = getPrefixCls('pagination')

  const cname = classNames(
    prefixCls,
    className
  )

  const totolPage = (totle: number, defaultPageSize: number): number[] => {
    const _totolPage = Math.round(totle / defaultPageSize)
    return Array.from({ length: _totolPage }, (v, i) => i)
  }

  const itemCls = (index) => {
    return classNames(
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-selected`]: currentPage === index + 1
      }
    )
  }

  const iconCls = (oritation: 'left' | 'right') => {
    return classNames(
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-${oritation}-icon`]: oritation,
        [`${prefixCls}-item-icon-disabled`]:
          (oritation === 'left' && currentPage === totolPage(total, defaultPageSize).at(0) + 1) ||
          (oritation === 'right' && currentPage === totolPage(total, defaultPageSize).at(-1) + 1)
      },
      `${prefixCls}-item-icon`
    )
  }

  const itemClick = (index: number): void => {
    setCurrentPage(index)
  }

  const preClick = (e: MouseEvent): void => {
    e.preventDefault()
    currentPage !== (totolPage(total, defaultPageSize).at(0) + 1) && setCurrentPage(currentPage - 1)
  }

  const nextClick = (e: MouseEvent): void => {
    e.preventDefault()
    currentPage !== (totolPage(total, defaultPageSize).at(-1) + 1) && setCurrentPage(currentPage + 1)
  }
  const itemRender = () => {
    return totolPage(total, defaultPageSize).map(index => <span className={`${itemCls(index)}`} key={index} onClick={() => itemClick(index + 1)}>{index + 1}</span>)
  }

  return (
    <div className={cname} style={{ ...style }} {...restProps}>

      <span className={iconCls('left')} onClick={(e) => preClick(e)}><KIcon icon="angle-left" /></span>
      {itemRender()}
      <span className={iconCls('right')} onClick={(e) => nextClick(e)}><KIcon icon="angle-right"></KIcon></span>

    </div>
  )
}

export default KPagination