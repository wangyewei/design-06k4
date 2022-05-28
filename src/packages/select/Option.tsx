import React, { FC } from "react";

export interface SelectorOptionProps {

}

const KOptions: FC<SelectorOptionProps> = props => {
  const {
    children
  } = props
  return (
    <li>
      {children}
    </li>
  )
}

export default KOptions