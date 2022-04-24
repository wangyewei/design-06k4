import React, { ForwardRefExoticComponent } from "react";
import Title, { TitleProps } from "./Title";
import Text, { TextProps } from './Text'
import Link, { LinkProps } from './Link'

export interface TypographyType {
  'Title': TitleProps,
  'Text': TextProps,
  'Link': LinkProps
}

const KTypography: Record<
  keyof TypographyType,
  ForwardRefExoticComponent<TypographyType[keyof TypographyType]>
> = { Title, Text, Link }



export default KTypography