import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='secondary' onClick={() => history.push('/')} disabled={location.pathname === '/'}>
          <Home />
        </IconButton>
        <Typography variant='h6'>Mock With Material</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
