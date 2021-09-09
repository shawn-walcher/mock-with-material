import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/layout/Header';
import APIHealth from './components/Health/APIHealth';
import TFEManagement from '../TFE/TFEDashboard';
import NoMatch from './components/NoMatch';
import LandingPage from './components/LandingPage';

import { ThemedContext } from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={ThemedContext}>
      <CssBaseline />
      <div className='App'>
        <Header />
        <Router>
          <Container maxWidth="lg">
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
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
