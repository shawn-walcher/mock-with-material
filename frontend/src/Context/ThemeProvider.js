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
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiButton: {
      styleOverrides: {
        textTransform: 'none',
      },
      defaultProps: {
        variant: 'contained',
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
    MuiTab: {
      styleOverrides: {
        textTransform: 'none',
      },
    },
  },
});

export { ThemedContext };
