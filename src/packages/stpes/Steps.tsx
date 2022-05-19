import React, { cloneElement, Component, CSSProperties, FC, ReactElement, createContext, ContextType } from "react";
import { childrenToArray, getPrefixCls } from "@/utils";
import classNames from "classnames";
import KStep, { StepProps } from "./Step";

export interface StepsProps {
  className?: string,
  style?: CSSProperties,
  children?: ReactElement<StepProps>[],
  current?: number,
  size?: 'small' | 'default'
}

interface StepState {
  current: number,
}

export const StepContext = createContext<StepState>(null)

const RowSteps: FC<StepsProps> = props => {

  const { current = 1, className, style, children, size = "default", ...restProps } = props

  const prefixCls = getPrefixCls('steps')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-small`]: size === 'small'
    },
    className
  )

  const child = childrenToArray(children).map((ele: ReactElement, index) => {
    if (!ele) return

    index = index + 1
    return cloneElement(ele, {
      dot: index !== children.length,
      key: index,
      index
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

  static Step = KStep;

  render() {
    return (
      <RowSteps {...this.props}>
        {this.props.children}
      </RowSteps>
    )
  }
}

export default KSteps