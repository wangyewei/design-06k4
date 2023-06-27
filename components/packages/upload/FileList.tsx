import React, { FC } from "react"
import type { UploadFile } from "./Upload"
import KIcon from "../icon"
import { getPrefixCls } from "@/utils"

export interface UplaodListProps {
  fileList: UploadFile[],
  onRemoved: (file: UploadFile) => void
}

export const UploadList: FC<UplaodListProps> = props => {
  const { fileList, onRemoved } = props
  const prefixCls = getPrefixCls('upload-list')
  return (
    <ul className={prefixCls}>
      {
        fileList.map(item => (
          <li className={`${prefixCls}-item`}>
            <span></span>
          </li>
        ))
      }
    </ul>
  )
}