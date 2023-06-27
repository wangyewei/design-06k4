import React, { CSSProperties } from 'react';
import KPageHeader from '../PageHeader';

const style: CSSProperties = {
  'border': '1px solid #ccc',
  'margin': '28px'
}

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

export default () => (
  <KPageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
    style={{ ...style }}
    tag={<span style={{ color: 'green', border: '1px solid green', padding: '0 4px' }}>Online</span>}
    avator="https://avatars.githubusercontent.com/u/49926816?v=4"
  />
);