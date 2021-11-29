import React, { FC } from 'react'
import { UploadFile } from './KUpload'
import KIcon from '../Icon/KIcon'
import Progress from '../Progress/KPogress'
export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="yewei-upload-list">
      {fileList.map(item => {
        return (
          <li className="yewei-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <KIcon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <KIcon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <KIcon icon="check-circle" theme="success" />}
              {item.status === 'error' && <KIcon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <KIcon icon="times" onClick={() => { onRemove(item) }} />
            </span>
            {item.status === 'uploading' &&
              <Progress
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )

}

export default UploadList;