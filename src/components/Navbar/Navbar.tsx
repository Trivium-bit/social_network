import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/news " activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/musik" activeClassName={classes.activeLink}> Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settigs" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;