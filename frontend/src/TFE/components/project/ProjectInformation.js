import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { TFEContext } from '../../../Context/TFEProvider';

const ProjectInformation = () => {
  const { projectInformation, projectOwner } = useContext(TFEContext);

  return (
    <Grid container>
      <Grid item xs={12} md={6} spacing>
        <Box margin={1}>
          <Typography variant='h6' gutterBottom component='div'>
            Project Name
          </Typography>
          <Typography variant='body1'>{projectInformation.name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} spacing>
        <Box margin={1}>
          <Typography variant='h6' gutterBottom component='div'>
            Ancestry
          </Typography>
          <Typography variant='body1'>{projectInformation.ancestry}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} spacing>
        <Box margin={1}>
          <Typography variant='h6' gutterBottom component='div'>
            Owner Name
          </Typography>
          <Typography variant='body1'>{projectOwner.name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} spacing>
        <Box margin={1}>
          <Typography variant='h6' gutterBottom component='div'>
            Owner ID
          </Typography>
          <Typography variant='body1'>{projectOwner.id}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectInformation;
