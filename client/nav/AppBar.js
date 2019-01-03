/**
 * Responsive AppBar with navigation
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: { },
  toolbar: {
    display: "flex",
  },
  title: {
    flex: "auto",
  },
  menuIcon: {
    marginRight: "12px",
  }
});

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, title: titleProp } = this.props;

    const menuIcon = (
      <IconButton className={classes.menuIcon} color="inherit">
        <MenuIcon />
      </IconButton>
    );

    const title = (
      <Typography className={classes.title} variant="h6"
        color="inherit">
        {titleProp}
      </Typography>
    );

    return (
      <MuiAppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {menuIcon}
          {title}
        </Toolbar>
      </MuiAppBar>
    );
  }
};

export default withStyles(styles)(AppBar);
