import React, { cloneElement, Component, CSSProperties, FC, ReactElement, createContext, ContextType, useEffect } from "react";
import { childrenToArray, getPrefixCls } from "@/utils";
import classNames from "classnames";
import KStep, { StepProps } from "./Step";

export interface StepsProps {
  className?: string,
  style?: CSSProperties,
  children?: ReactElement<StepProps>[],
  current?: number,
  size?: 'small' | 'default',
  direction?: 'horizontal' | 'vertical',
  danger?: boolean,
  onStepChange?: (current?: number) => void
}

interface StepState {
  current: number,
}

export const StepContext = createContext<StepState>(null)

const RowSteps: FC<StepsProps> = props => {


  const {
    current = 1,
    className,
    style,
    children,
    size = "default",
    direction = "horizontal",
    danger = false,
    onStepChange,
    ...restProps
  } = props

  useEffect(() => {
    onStepChange && onStepChange(current)
  }, [current])

  const prefixCls = getPrefixCls('steps')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-danger`]: danger
    },
    className
  )

  const child = childrenToArray(children).map((ele: ReactElement, index) => {
    if (!ele) return

    index = index + 1
    return cloneElement(ele, {
      dot: index !== children.length,
      key: index,
      index,
      danger
    })

  })

  return (
    <div className={cname} style={{ ...style }} {...restProps}>
      <StepContext.Provider value={{ current }}>
        {child}
      </StepContext.Provider>
    </div>
  )
}

class KSteps extends Component<StepsProps, {}> {

  static Step: FC<StepProps> = KStep;

  render() {
    return (
      <RowSteps {...this.props}>
        {this.props.children}
      </RowSteps>
    )
  }
}

export default KSteps