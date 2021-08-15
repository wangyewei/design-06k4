import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';

// import KButton, { ButtonType, ButtonSize } from './components/KButton/KButton'
import KMenu from './components/Menu/KMenu'
import KMenuItem from './components/Menu/KMenuItem'
import KSubMenu from './components/Menu/KSubMenu'
import KIcon from './components/Icon/KIcon'
import KTransition from './components/Transition/KTransition'
import KButton from './components/Button/KButton'
// import Yewei from './Yewei'
library.add(fas)
function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">

      {/* <div>{Object.keys(info)}</div> */}
      {/* {Object.keys(info).map<defaultItem>(item => <div key={item}>{item}: {info[item]}</div>)} */}
      <KIcon icon="arrow-down" theme="primary" size="10x" />
      <KMenu defaultIndex='0'
        // mode="vertical"
        defaultOpenSubMenus={['2']}
      >
        <KMenuItem>cool link 1</KMenuItem>
        <KMenuItem>cool link 2</KMenuItem>
        <KSubMenu title="dropdown">
          <KMenuItem>drop down 1</KMenuItem>
          <KMenuItem>drop down 2</KMenuItem>
          <KMenuItem>drop down 3</KMenuItem>
        </KSubMenu>
        <KMenuItem disabled>cool link 3</KMenuItem>
      </KMenu>
      <KButton size="lg" onClick={() => { setShow(!show) }} >
        Toggle
      </KButton>
      <KTransition in={show} timeout={300} animation="zoom-in-left">
        <div>
          <div>I don't wanna be you anymore</div>
          <div>I don't wanna be you anymore</div>
          <div>I don't wanna be you anymore</div>
          <div>I don't wanna be you anymore</div>
          <div>I don't wanna be you anymore</div>
        </div>

      </KTransition>

      <KTransition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <KButton btnType="primary" size="lg">A Large KButton</KButton>
      </KTransition>

      {/* <KButton>button</KButton>
      <KButton disabled>disabled</KButton>
      <KButton size={ButtonSize.Large} btnType={ButtonType.Primary}>Large Primary</KButton>
      <KButton size={ButtonSize.Small} btnType={ButtonType.Danger}>small danger</KButton>
      <KButton btnType={ButtonType.Link} href="https://www.baidu.com">Link</KButton>
      <KButton btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Link Disabled</KButton> */}
    </div >
  );
}

export default App;
