/**
 * theme.js
 * Custom Material Theme
 */

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[300]
    },
  },
  typography: {
    useNextVariants: true,
  },
});
