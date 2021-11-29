import { FC, ReactElement } from "react";
import { KInputProps } from '../Input/KInput';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<KInputProps, 'onSelect'> {
    /**设置输入框接受的数据*/
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /**选中事件回调函数 */
    onSelect?: (item: DataSourceType) => void;
    /**自定义列表模板 */
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * 自动填充的输入框
 * ### 引用方法
 *
 * ~~~js
 * import { KAutuComplete } from '06k4-design'
 * ~~~
 */
export declare const KAutuComplete: FC<AutoCompleteProps>;
export default KAutuComplete;
