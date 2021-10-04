import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const LandingPage = () => {
  const history = useHistory();

  return (
    <div>
      <Typography variant='h3' gutterBottom>
        Demo Portal with Material-UI
      </Typography>
      {/* TODO: Provide links for content and additional helpful landing page features */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6'>TFE:</Typography>
              <Typography variant='body1' gutterBottom>
                List of projects as if they are managed through TFE.
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => history.push('/tfe')}>TFE Management</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6'>API:</Typography>
              <Typography variant='body1' gutterBottom>
                Verify that API is responding to a health check.
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => history.push('/health')}>API Health</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6'>Another Link:</Typography>
              <Typography variant='body1' gutterBottom>
                A test for logging bad paths and then redirecting the user back home.
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => history.push('/badlink')}>Bad Link</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
