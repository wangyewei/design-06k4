import React, { ForwardRefExoticComponent } from "react";
import Title, { TitleProps } from "./Title";
import Text, { TextProps } from './Text'

export interface TypographyType {
  'Title': TitleProps,
  'Text': TextProps
}

const KTypography: Record<
  keyof TypographyType,
  ForwardRefExoticComponent<TypographyType[keyof TypographyType]>
> = { Title, Text }



export default KTypography