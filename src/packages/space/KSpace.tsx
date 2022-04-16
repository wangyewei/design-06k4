import React, {
  createContext,
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactNode,
  useMemo
} from "react";
import { childrenToArray, getPrefixCls } from "@/utils";
import Item from "./Item";
import classNames from "classnames";
import useFlexGapSupport from "@/hooks/useFlexGapSupport";

export const SpaceContext = createContext({
  latesIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
})

export type SpaceSize = number | 'small' | 'middle' | 'large' | undefined;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'enter' | 'baseline';
  split?: ReactNode;
  wrap?: boolean;
}

const spaceSize = {
  small: 8,
  middel: 16,
  large: 24
}

function getNumberSize(size: SpaceSize) {
  return typeof size === 'string' ? spaceSize[size] : size || 0
}

const KSpace: FC<SpaceProps> = props => {


  const {
    size = 'small',
    align,
    direction = 'horizontal',
    split,
    wrap = false,
    children,
    className,
    style,
    ...restProps
  } = props

  const supportFlexGap = useFlexGapSupport()

  const [horizontalSize, verticalSize] = useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map((item) =>
        getNumberSize(item),
      ),
    [size],
  );


  const childNodes = childrenToArray(children, { keepEmpty: true })


  // prefix-cls
  const prefixCls: string = getPrefixCls('space')
  const itemClassName = `${prefixCls}-item`

  let latesIndex: number = 0
  const marginDirection = 'marginRight'

  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;

  const canames = classNames(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-algin-${mergedAlign}`]: mergedAlign
    },
    className
  )

  //child
  const nodes = childNodes.map((child, i) => {
    if (child !== undefined && child !== null) {
      latesIndex = i
    }

    const keyOfChild = child && child.key

    return (
      <Item className={itemClassName}
        key={`${itemClassName}-${keyOfChild || i}`}
        direction={direction}
        index={i}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}>
        {child}
      </Item>
    )
  })

  const spaceContext = useMemo(
    () => ({ horizontalSize, verticalSize, latesIndex, supportFlexGap }),
    [horizontalSize, verticalSize, latesIndex, supportFlexGap],
  );
  //

  // render
  if (childNodes.length === 0) return null
  const gapStyle: CSSProperties = {}
  if (wrap) {
    gapStyle.flexWrap = 'wrap'
    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize
    gapStyle.rowGap = verticalSize
  }
  return (
    <div className={canames}
      style={{ ...gapStyle, ...style }}
      {...restProps}>
      <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>

    </div>
  )

}

export default KSpace