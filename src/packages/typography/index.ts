import React, { ForwardRefExoticComponent } from "react";
import Title, { TitleProps } from "./Title";
import Text, { TextProps } from './Text'
import Link, { LinkProps } from './Link'
import Blockquote, { BlockquoteProps } from './Blockquote'

export interface TypographyType {
  'Title': TitleProps,
  'Text': TextProps,
  'Link': LinkProps,
  'Blockquote': BlockquoteProps
}

const KTypography: Record<
  keyof TypographyType,
  ForwardRefExoticComponent<TypographyType[keyof TypographyType]>
> = { Title, Text, Link, Blockquote }



export default KTypography