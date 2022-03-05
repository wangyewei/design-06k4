import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import KDivider from './components/Divider/index'

library.add(fas)




export { default as KAutuComplete } from './components/AutuComplete'
export { default as KButton } from './components/Button'
export { default as KMenu } from './components/Menu'
export { default as KIcon } from './components/Icon'
export { default as KInput } from './components/Input'
export { default as KProgress } from './components/Progress'
export { default as KTabs } from './components/Tabs'
export { default as KTransition } from './components/Transition'
export { default as KUpload } from './components/Upload'



ReactDOM.render(
  <div>
    <KDivider></KDivider>
  </div>,
  document.getElementById('root')
)

