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
    backIcon={false}
    style={{ ...style }}
  />
);