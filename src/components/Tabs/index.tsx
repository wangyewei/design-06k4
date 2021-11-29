import { FC } from "react";
import Tabs, { TabsProps } from './Tabs'
import TabItem, { TabsItemProps } from './TabItem'

export type ITabsComponents = FC<TabsProps> & {
  Item: FC<TabsItemProps>
}

const TransTabs = Tabs as ITabsComponents

TransTabs.Item = TabItem

export default TransTabs