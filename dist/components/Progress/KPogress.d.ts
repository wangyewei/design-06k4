import React, { FC } from 'react';
import { ThemeProps } from '../Icon/KIcon';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
