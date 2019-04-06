import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
    return(
            <AppBar position="static">
                <Toolbar>
                    Latest Musings
                </Toolbar>
            </AppBar>
    )
}
export default NavBar;