import { Typography } from '@mui/material';
import { Redirect, useLocation } from 'react-router-dom';

const NoMatch = () => {
  const location = useLocation();

  console.log(`%cUser tried to access path: %c${location.pathname}`, 'color:red;', '');

  return (
    <div>
      <Typography variant='h6'>Bad Path, redirecting back to dashboard</Typography>
      <Redirect to={'/'} />
    </div>
  );
};

export default NoMatch;
