import React, { useState } from "react";
import Upload from '../Upload'
import KButton from "@/packages/button"
export const BasicFileUpload = () => {
  const [current, setCurrent] = useState<string>('未开始')
  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%' }}>

      <span>当前状态: {current}</span>

      <Upload
        url="https://run.mocky.io/v3/b0d72fae-0947-43eb-b707-b19756cd76dc"
        onProgresss={(e) => setCurrent('上传中')}
        onSuccess={() => setCurrent('上传成功')}
        onError={() => setCurrent('上传失败')}
      >
        <KButton
          iconName="upload"
        > 点击上传</KButton>
      </Upload>
    </div>
  )
}


export default BasicFileUpload