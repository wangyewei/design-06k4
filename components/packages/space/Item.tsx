import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { SpaceContext } from './KSpace'

export interface ItemProps {
  className: string,
  children: ReactNode,
  index: number,
  direction: 'horizontal' | 'vertical',
  marginDirection: 'marginLeft' | 'marginRight',
  split?: string | ReactNode,
  wrap?: boolean
}

const Item: FC<ItemProps> = (props) => {

  const {
    horizontalSize,
    verticalSize,
    latesIndex,
    supportFlexGap
  } = useContext(SpaceContext)

  const {
    direction,
    index,
    split,
    marginDirection,
    wrap,
    children,
    className
  } = props

  let style: CSSProperties = {}

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latesIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        }
      }
    } else {
      style = {
        ...(index < latesIndex && { [marginDirection]: horizontalSize / (split ? 2 : 1) }),
        ...(wrap && { paddingBottom: verticalSize }),
      }
    }
  }

  if (!children) return null
  return (
    <>
      <div className={className}
        style={style}>
        {children}
      </div>
      {index < latesIndex && split && (
        <span className={`${className}-split`}
          style={style}
        >
          {split}
        </span>
      )}
    </>
  )
}

export default Item