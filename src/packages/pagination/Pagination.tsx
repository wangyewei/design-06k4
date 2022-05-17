import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, memo, MouseEvent, ReactNode, useMemo, useState } from "react";
import KIcon from "../icon";

export interface PaginationProps {
  className?: string,
  style?: CSSProperties,
  current?: number,
  defaultCurrent?: number,
  defaultPageSize?: number,
  total?: number,
  onPageChange?: (page?: number, pageSize?: number) => void;
}

const KPagination: FC<PaginationProps> = props => {
  const {
    className,
    style,
    current,
    defaultCurrent = 1,
    defaultPageSize = 10,
    total,
    onPageChange,
    ...restProps } = props

  /// Core State
  const [currentPage, setCurrentPage] = useState<number>(defaultCurrent)
  /// UI Render State
  const [leftEll, setLeftEll] = useState<boolean>(false)
  const [rightEll, setRightEll] = useState<boolean>(false)
  const [leftEllIn, setLeftEllIn] = useState<boolean>(false)
  const [rightEllIn, setRightEllIn] = useState<boolean>(false)

  const prefixCls = getPrefixCls('pagination')

  const cname = classNames(
    prefixCls,
    className
  )

  const getTotalPage = (_totle: number, _defaultPageSize: number): number[] => useMemo(() => {
    const _totalPage = Math.round(_totle / _defaultPageSize)
    onPageChange && onPageChange(currentPage, _totalPage)
    return Array.from({ length: _totalPage }, (v, i) => i + 1)
  }, [total, defaultPageSize])


  const getRenderStack = (list: number[]): number[] => useMemo(() => {
    let [...stack]: number[] = list;
    if (stack.length <= 2) return;


    stack.pop()
    stack.shift()

    const endBit = stack.at(-1)

    if (stack.length < 4 || currentPage < 5) {
      setLeftEll(false)
      setLeftEllIn(false)
    }
    // pre 4 pages
    if (stack.length > 4 && currentPage < 5) {
      stack = [2, 3, 4, 5]
      setRightEll(true)
    }

    if (stack.length > 4 && currentPage >= 5) {
      setLeftEll(true)
      stack = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
      setRightEll(true)
    }

    // last 4 pages
    if (endBit - currentPage < 4) {
      setRightEll(false)
      setRightEllIn(false)
      stack = [endBit - 3, endBit - 2, endBit - 1, endBit]
    }

    return stack
  }, [currentPage])

  const totalPage = getTotalPage(total, defaultPageSize)
  const renderStack = getRenderStack(totalPage)


  const itemCls = (index) => {
    return classNames(
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-selected`]: currentPage === index
      }
    )
  }

  const iconCls = (oritation: 'left' | 'right' | 'ellipsis') => {
    return classNames(
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-${oritation}-icon`]: oritation,
        [`${prefixCls}-item-icon-disabled`]:
          (oritation === 'left' && currentPage === totalPage.at(0)) ||
          (oritation === 'right' && currentPage === totalPage.at(-1)),
      },
      `${prefixCls}-item-icon`
    )
  }

  const itemClick = (index: number): void => {
    setCurrentPage(index)
    onPageChange && onPageChange(currentPage, totalPage.length)
  }

  const preClick = (e: MouseEvent): void => {
    e.preventDefault()
    currentPage !== (totalPage.at(0)) && setCurrentPage(currentPage - 1)
    onPageChange && onPageChange(currentPage, totalPage.length)
  }

  const nextClick = (e: MouseEvent): void => {
    e.preventDefault()
    currentPage !== (totalPage.at(-1)) && setCurrentPage(currentPage + 1)
    onPageChange && onPageChange(currentPage, totalPage.length)
  }

  const preFivePage = (e: MouseEvent): void => {
    e.preventDefault()
    if (currentPage <= 5) {
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage - 5)
    }
    onPageChange && onPageChange(currentPage, totalPage.length)
  }

  const nextFivePage = (e: MouseEvent): void => {
    e.preventDefault()
    if (totalPage.at(-1) - currentPage < 5) {
      setCurrentPage(totalPage.at(-1))
    } else {
      setCurrentPage(currentPage + 5)
    }
    onPageChange && onPageChange(currentPage, totalPage.length)

  }

  const itemRender = (): ReactNode => {

    return (
      <>
        {
          // 第一页
          totalPage.length && (
            <>
              <span className={`${itemCls(1)}`} onClick={() => itemClick(1)}>1</span>
            </>
          )
        }
        {
          leftEll && (<span
            className={`${iconCls('ellipsis')}`}
            onMouseEnter={() => setLeftEllIn(true)}
            onMouseLeave={() => setLeftEllIn(false)}
            onClick={e => preFivePage(e)}>
            {leftEllIn ? <KIcon icon="angles-left"></KIcon> : <KIcon icon="ellipsis" />}
          </span>)
        }
        {
          renderStack.map(item => (
            <span className={`${itemCls(item)}`}
              onClick={() => itemClick(item)}
              key={item}>
              {item}
            </span>
          ))
        }
        {
          rightEll && (<span
            className={`${iconCls('ellipsis')}`}
            onMouseEnter={() => setRightEllIn(true)}
            onMouseLeave={() => setRightEllIn(false)}
            onClick={e => nextFivePage(e)}>
            {rightEllIn ? <KIcon icon="angles-right"></KIcon> : <KIcon icon="ellipsis" />}
          </span>)
        }
        {
          // 最后一页
          totalPage.length > 2 && (
            <>
              <span className={`${itemCls(totalPage.at(-1))}`} onClick={() => itemClick(totalPage.length)}>{totalPage.length}</span>
            </>
          )
        }
      </>
    )
  }

  return (
    <div className={cname} style={{ ...style }} {...restProps}>
      <span className={iconCls('left')} onClick={(e) => preClick(e)}><KIcon icon="angle-left" /></span>
      {itemRender()}
      <span className={iconCls('right')} onClick={(e) => nextClick(e)}><KIcon icon="angle-right"></KIcon></span>

    </div>
  )
}

export default memo(KPagination)