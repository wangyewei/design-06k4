import { FC } from 'react';
import { UploadProps } from './KUpload';
import { DraggerProps } from './dragger';
import { UploadListProps } from './uploadList';
export declare type IUploadComponents = FC<UploadProps> & {
    Dragger: FC<DraggerProps>;
    UploadList: FC<UploadListProps>;
};
declare const TransUpload: IUploadComponents;
export default TransUpload;
