import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";

export type SpaceSize = number

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

const KSpace: FC<SpaceProps> = props => {

  return (
    <></>
  )
}