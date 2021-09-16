import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position='static'>
      <Toolbar>
          <Typography variant='h6'>
            Mock With Material
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
