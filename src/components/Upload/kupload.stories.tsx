import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import KUpload from './KUpload'

const SimpleUpload = () => {
  return (
    <KUpload
      action="http://192.168.146.1:3000/tests"
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
    >
    </KUpload>
  )
}

storiesOf('上传 Upload', module)
  .add('Upload', SimpleUpload)