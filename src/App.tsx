import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
function App() {
  return (
    <div className="App">

      <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
        <MenuItem index={0}>cool link 1</MenuItem>
        <MenuItem index={1}>cool link 2</MenuItem>
        <MenuItem index={2} disabled>cool link 3</MenuItem>
      </Menu>

      {/* <Button>button</Button>
      <Button disabled>disabled</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>Large Primary</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>small danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Link Disabled</Button> */}
    </div>
  );
}

export default App;
