import { createTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

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
    MuiBackdrop: {
      defaultProps: {
        zIndex: zIndex.drawer + 1,
      },
    },
  },
});

export { ThemedContext };
