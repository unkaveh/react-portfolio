import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const appPalette = {
  momJeans: '#467fa1',
  aubergine: '#54295c',
  midnight: '#061f2b',
  plum: '#1e0f1d',
  cranberry: '#5e0b0b',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#273068',
    },
    secondary: {
      main: '#ff4547',
    }
  },
  colors: { ...appPalette }
});

export default theme;