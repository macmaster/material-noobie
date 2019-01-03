/**
 * Application entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from 'store';
import AppBar from 'nav/AppBar';
import { theme } from 'style/theme';

// Application Content
function Content(props) {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar title={props.title} />
      </MuiThemeProvider>
    </ReduxProvider>
  );
}

var content = ReactDOM.render(
  <Content title='Material Nature' />,
  document.getElementById('content')
);

