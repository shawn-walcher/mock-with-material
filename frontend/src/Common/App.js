import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Header from './components/layout/Header';
import APIHealth from './components/Health/APIHealth';
import TFEManagement from '../TFE/TFEDashboard';
import NoMatch from './components/NoMatch';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Router>
        <div className='App'>
          <main>
            <Switch>
              <Route path='/health' component={APIHealth} />
              <Route path='/tfe' component={TFEManagement} />
              <Route exact path='/' component={LandingPage} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
