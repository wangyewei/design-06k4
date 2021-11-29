import { FC } from 'react';
export interface DraggerProps {
    onFile: (files: FileList) => void;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
