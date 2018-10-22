import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Joelmir Ribacki" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/joelmir">
          <ListItemText primary="https://github.com/joelmir"/>
        </ListItem>
        <ListItem button component="a" href="https://www.linkedin.com/in/joelmirribacki">
          <ListItemText primary="https://www.linkedin.com/in/joelmirribacki"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="+55 (54) 99109-1488"/>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);