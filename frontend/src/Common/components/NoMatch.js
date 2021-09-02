import { Redirect, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const NoMatch = () => {
  const location = useLocation();

  console.log(`User tried to access path: ${location.pathname}`);

  return (
    <div>
      <Typography variant='h6'>Bad Path, redirecting back to dashboard</Typography>
      <Redirect to={'/'} />
    </div>
  );
};

export default NoMatch;
