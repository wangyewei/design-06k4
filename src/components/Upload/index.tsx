import { FC } from 'react'

import KUpload, { UploadProps } from './KUpload'
import Dragger, { DraggerProps } from './dragger'
import UploadList, { UploadListProps } from './uploadList'

export type IUploadComponents = FC<UploadProps> & {
  Dragger: FC<DraggerProps>
  UploadList: FC<UploadListProps>
}

const TransUpload = KUpload as IUploadComponents

TransUpload.Dragger = Dragger
TransUpload.UploadList = UploadList

export default TransUpload