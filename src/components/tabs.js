import React from 'react';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  toolbarSecondary: {
    backgroundColor: '#2196f3',
    borderColor: 'none',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  activeStyle: {
    fontWeight: 'bold',
    color: 'gray',
    background: '#7bb7eb',
  },
});

export default function IconLabelTabs() {

  const sections = [
    ['Blog', '/'],
    ['Portfolio', 'portfolio'],
    ['About Me', 'about'],
  ];

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //TODO: Add Navigate function to console internal navigation instead of <LINK>


  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Link
          color="inherit"
          key={section[0]}
          to={section[1]}
          className={classes.toolbarLink}
          activeClassName={classes.activeStyle}
          style={{ textDecoration: 'none', height: '100%' }}
        >
          <Button variant="flat" component="span" style={{ padding: '0 10px', margin: '0 30px', height: '100%' }}>{section[0]}</Button>
        </Link>
      ))
      }
    </Toolbar >
  );
}