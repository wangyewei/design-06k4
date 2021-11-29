import { FC } from 'react';
import { UploadFile } from './KUpload';
export interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
