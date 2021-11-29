import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { KUpload } from './KUpload'
import Icon from '../Icon/KIcon'
const SimpleUpload = () => {
  return (
    <KUpload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </KUpload>
  )
}

storiesOf('上传 Upload', module)
  .add('Upload', SimpleUpload)