import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const LandingPage = () => {
  const history = useHistory();

  return (
    <div>
      <Typography variant='h3' gutterBottom>Landing Page</Typography>
      {/* TODO: Provide links for content and additional helpful landing page features */}
      <Card variant='outlined'>
        <CardContent>
          Information for different subroutes (subapps)
          <Grid container spacing={2}>
            <Grid item>
              <Button variant='contained' color='primary' onClick={() => history.push('/tfe')}>
                TFE Management
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary' onClick={() => history.push('/health')}>
                API Health
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
