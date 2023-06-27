import React from 'react';
import { HashRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import KBreadcrumb from '..';
import './_style.scss';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = props => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <KBreadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </KBreadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <KBreadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </KBreadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <KBreadcrumb>{breadcrumbItems}</KBreadcrumb>
    </div>
  );
};

export default () => (
  <div className='container'>
    <div className="nav">
      <div className="left">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="searchbar">
        <span></span>
      </div>
    </div>
    <HashRouter>
      <Home />
    </HashRouter>
  </div>
);