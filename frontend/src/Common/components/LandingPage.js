import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const LandingPage = () => {
  const history = useHistory();

  return (
    <div>
      <Typography variant='h3' gutterBottom>
        Demo Portal with Material-UI
      </Typography>
      {/* TODO: Provide links for content and additional helpful landing page features */}
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h4'>Information for different subroutes (subapps)</Typography>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={3}>
              <Grid item>
                <Typography variant='h6'>Ut enim ad minim:</Typography>
                <Typography variant='body1' gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
              <Grid container>
                <Grid item>
                  <Button variant='contained' color='primary' onClick={() => history.push('/tfe')}>
                    TFE Management
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6'>Ut enim ad minim:</Typography>
              <Typography variant='body1' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Grid container>
                <Grid item>
                  <Button variant='contained' color='primary' onClick={() => history.push('/health')}>
                    API Health
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h6'>Ut enim ad minim:</Typography>
              <Typography variant='body1' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Grid container>
                <Grid item>
                  <Button variant='contained' color='primary' onClick={() => history.push('/badlink')}>
                    Bad Link
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
