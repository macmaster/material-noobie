/**
 * theme.js
 * Custom Material Theme
 */

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  typography: {
    useNextVariants: true,
  },
});
