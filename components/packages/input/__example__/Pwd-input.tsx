import React from 'react';

import KInput from '../Input';

const { Password } = KInput

export default () => (
  <>
    <Password placeholder='Type your password' style={{ width: '350px', margin: '12px' }} />
    <Password placeholder='Type your password' style={{ width: '350px', margin: '12px' }} visibilityToggle={false} />
  </>
);