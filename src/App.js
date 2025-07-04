import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import Layout from 'layouts/Midone';

import './app.css';

function PageLayout() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 1024,
        }}
      >
        Main Content
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<PageLayout />} />
        <Route path={'/:pathname'} element={<PageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
