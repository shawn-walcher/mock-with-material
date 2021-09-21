import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { TFEProvider } from '../Context/TFEProvider';
import { ThemeProvider } from '@mui/material/styles';
import { ThemedContext } from '../Context/ThemeProvider';
import APIHealth from './components/health/APIHealth';
import Header from './components/layout/Header';
import LandingPage from './components/dashboard/LandingPage';
import NoMatch from './components/NoMatch';
import ProjectDashboard from '../TFE/components/project/ProjectDashboard';
import TFEManagement from '../TFE/components/dashboard/TFEDashboard';

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
