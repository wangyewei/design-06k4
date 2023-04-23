import React, { ChangeEvent, FC, useRef } from "react";
import { getPrefixCls } from "../../utils"
import classNames from "classnames";
import axios, { AxiosResponse, AxiosError } from "axios";


export type UploadFilesStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string,
  size: number,
  name: string,
  status?: UploadFilesStatus,
  percent?: number,
  raw?: File,
  response?: AxiosResponse,
  error?: AxiosError
}

export interface UplaodProps {
  className?: string,
  url: string,
  onBeforeUpload?: (file: File) => boolean | Promise<File>,
  onProgresss?: (percent: number, file: File) => void,
  onSuccess?: (data: AxiosResponse, file: File) => void,
  onError?: (data: AxiosError, file: File) => void,
  onChange?: (data: AxiosResponse | AxiosError, file: File) => void,
  onRemoved?: (file: UploadFile) => void
}

export const Upload: FC<UplaodProps> = props => {

  const { className, children, url, onBeforeUpload, onSuccess, onError, onChange, onProgresss, onRemoved } = props
  const prefixCls = getPrefixCls('upload')
  const cnames = classNames(prefixCls, className)

  const $fileInput = useRef<HTMLInputElement>(null)

  // 代理input['file']的点击
  const handleClick = () => {
    $fileInput.current && $fileInput.current?.click()
  }
  // input['file'] change事件
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e.target.files
    if (!files) return
    _uploadProxy(files)
  }

  // 上传代理
  const _uploadProxy = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach((file: File) => {
      if (!onBeforeUpload) {
        _upload(file)
        return
      }

      const result = onBeforeUpload(file)
      if (result && result instanceof Promise) {
        result.then(processedFile => {
          _upload(processedFile)
        })
      } else if (result !== false) {
        _upload(file)
      }
    })
  }

  // 上传

  const _upload = async (file: File) => {

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress(e) {
          let percentage = Math.round((e.loaded * 100) || 0)
          if (percentage < 100) {
            if (onProgresss) onProgresss(percentage, file)
          }
        }
      })
      onSuccess && onSuccess(res, file)
      onChange && onChange(res, file)
    } catch (err) {
      onError && onError(err, file)
      onChange && onChange(err, file)
    }
  }
  return (
    <div className={cnames}>

      <div className={`${prefixCls}-input`}
        onClick={handleClick}>
        {children}
        <input
          type="file"
          ref={$fileInput}
          onChange={handleFileChange}
          style={{ display: 'none' }} />
      </div>

    </div>
  )
}

export default Upload