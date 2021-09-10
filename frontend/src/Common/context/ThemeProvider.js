import { createTheme } from '@material-ui/core/styles';

const ThemedContext = createTheme({
  palette: {
    primary: {
      main: '#1B5E1F',
    },
    secondary: {
      main: '#FB5D88',
    },
  },
});

export { ThemedContext };
