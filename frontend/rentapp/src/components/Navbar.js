import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, withRouter } from 'react-router-dom';
import logo from '../img/logo.png';
import AuthHelperMethods from '../services/AuthHelperMethods';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userHelper = new AuthHelperMethods();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('login');
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    userHelper.logout();
  };

  function showLogOut() {
    return (
      <Link to="/" className="link" onClick={handleLogOut}>
        <MenuItem>Log Out</MenuItem>{' '}
      </Link>
    );
  }

  function showSignIn() {
    return (
      <div className="signIn">
        <Link to="/login" className="link" onClick={handleClose}>
          <MenuItem>Login</MenuItem>{' '}
        </Link>
        <Link to="/signin" className="link" onClick={handleClose}>
          <MenuItem>Sign In</MenuItem>{' '}
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img style={{ maxWidth: 160 }} src={logo} alt="logo" />
            </Link>
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {userHelper.loggedIn() ? userHelper.getConfirm().user_name : ''}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {userHelper.loggedIn() ? showLogOut() : showSignIn()}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MenuAppBar);
