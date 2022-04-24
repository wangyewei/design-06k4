import React, { ForwardRefExoticComponent } from "react";
import Title, { TitleProps } from "./Title";

export interface TypographyType {
  'Title': TitleProps
}

const KTypography: Record<keyof TypographyType, ForwardRefExoticComponent<TypographyType[keyof TypographyType]>> = { Title }


export default KTypography