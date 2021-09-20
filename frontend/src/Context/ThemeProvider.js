import { createTheme } from '@mui/material/styles';

const ThemedContext = createTheme({
  palette: {
    primary: {
      main: '#1B5E1F',
    },
    secondary: {
      main: '#FB5D88',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        style: {
          textTransform: 'none',
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      },
    },
  },
});

export { ThemedContext };
