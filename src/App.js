import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path={'/'} component={PageLayout} exact />
        <Route path={'/:pathname'} component={PageLayout} exact />
      </Switch>
    </Router>
  );
}

export default App;
