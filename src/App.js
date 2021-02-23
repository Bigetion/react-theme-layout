import Layout from './Integral';

import 'font-awesome/css/font-awesome.min.css';

import './app.css';

function App() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 500,
          background: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        Main Content
      </div>
    </Layout>
  );
}

export default App;
