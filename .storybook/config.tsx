import { configure, addDecorator } from '@storybook/react';
import "../src/styles/index.scss"
import React from 'react';
import "../src/styles/index.scss"
const styles: React.CSSProperties = {
  textAlign: 'center',
  margin: '10px'
}

const centerDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

addDecorator(centerDecorator)

configure(require.context('../src/components', true, /\.stories\.tsx$/), module)

