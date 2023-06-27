import React, { ReactElement, ReactNode, Children } from "react";
import { isFragment } from 'react-is'

export interface Option {
  keepEmpty?: boolean
}

export function childrenToArray(
  children: ReactNode,
  option: Option = {},
): ReactElement[] {
  let result: ReactElement[] = []
  Children.forEach(children, (child: any) => {
    if ((child === undefined || child === null) && option.keepEmpty) {
      return
    }

    if (Array.isArray(child)) {
      result = result.concat(childrenToArray(child))
    } else if (isFragment(child) && child.props) {
      result = result.concat(childrenToArray(child.props.children, option))
    } else {
      result.push(child)
    }
  })

  return result
}