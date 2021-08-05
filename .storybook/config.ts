import { configure, addDecorator } from '@storybook/react';
import "../src/styles/index.scss"

configure(require.context('../src/components', true, /\.stories\.tsx$/), module)
