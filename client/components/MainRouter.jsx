import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './contact';
import Education from './services';
import Project from './project';
import Layout from './Layout';
import './style.css';

const MainRouter = () => {
  return (
    <div className="container">
        <Layout> {/* Ensure Layout is wrapping the children */}
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/education" element={<Layout><Education /></Layout>} />
      <Route path="/project" element={<Layout><Project /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
    </Layout>
    </div>
  );
}

export default MainRouter;