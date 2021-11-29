import React from "react";
export interface TabsProps {
    className?: string;
    defaultIndex?: number;
    onSelect: ((selectIndex: number) => void);
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
