import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <Button>button</Button>
      <Button disabled>disabled</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>Large Primary</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>small danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Link Disabled</Button>
    </div>
  );
}

export default App;
