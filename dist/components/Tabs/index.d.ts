import { FC } from "react";
import { TabsProps } from './Tabs';
import { TabsItemProps } from './TabItem';
export declare type ITabsComponents = FC<TabsProps> & {
    Item: FC<TabsItemProps>;
};
declare const TransTabs: ITabsComponents;
export default TransTabs;
