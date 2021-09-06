import { createTheme } from '@material-ui/core/styles';

const ThemedContext = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#F96302',
    },
  },
});

export { ThemedContext };
