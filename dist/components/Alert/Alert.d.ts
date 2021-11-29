import React from "react";
interface BaseAlertProps {
    className?: string;
    success?: string;
    danger?: string;
    warning?: string;
    AlertText: string;
}
export declare type AlertProps = Partial<BaseAlertProps>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
