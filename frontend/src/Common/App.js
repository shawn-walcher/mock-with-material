import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/layout/Header';
import APIHealth from './components/Health/APIHealth';
import TFEManagement from '../TFE/TFEDashboard';
import NoMatch from './components/NoMatch';
import LandingPage from './components/LandingPage';

import { ThemedContext } from '../Context/ThemeProvider';
import { TFEProvider } from '../Context/TFEProvider';
import ProjectDashboard from '../TFE/components/project/ProjectDashboard';

function App() {
  return (
    <ThemeProvider theme={ThemedContext}>
      <CssBaseline />
      <div className='App'>
        <Header />
        <TFEProvider>
          <Router>
            <Container maxWidth='xl'>
              <div className='App'>
                <main>
                  <Switch>
                    <Route path='/health' component={APIHealth} />
                    <Route path={'/tfe/:projectID'} component={ProjectDashboard} />
                    <Route path='/tfe' component={TFEManagement} />
                    <Route exact path='/' component={LandingPage} />
                    <Route component={NoMatch} />
                  </Switch>
                </main>
              </div>
            </Container>
          </Router>
        </TFEProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
