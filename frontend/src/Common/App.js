import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
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
    <Router>
      <ThemeProvider theme={ThemedContext}>
        <CssBaseline />
        <div className='App'>
          <Header />
          <TFEProvider>
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
          </TFEProvider>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
