import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from 'axios'
import KButton from '../Button/KButton'

export type uploadFileStatus = 'ready' | 'uploadig' | 'success' | 'error'
export interface uploadFile {
  uid: string;
  size: number;
  name: string;
  status?: uploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
}

export const KUpload: FC<UploadProps> = (props?) => {
  const {
    action,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<uploadFile[]>([])
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const _post = (file: File) => {
    let _file: uploadFile = {
      uid: `06K4-UFile-${Date.now()}`,
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'mutipart/form-data',
      },
      onUploadProgress: e => {
        let percentage = Math.round(e.load * 100) / e.total | 0
        if (percentage < 100) {
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      if (onSuccess) onSuccess(resp.data, file)
      console.log(_file)
      if (onChange) onChange(file)
    }).catch(err => {
      if (onError) onError(err, file)
      if (onChange) onChange(file)
    })
  }

  const UploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        _post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            _post(processedFile)
          })
        } else if (result !== false) {
          _post(file)
        }
      }
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    UploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  return (
    <div className="yewei-upload-component">
      <KButton btnType="primary"
        onClick={handleClick}
      >Upload File
      </KButton>
      <input type="file"
        className="yewei-file-input"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleFileChange}
      />
    </div>
  )
}

export default KUpload;