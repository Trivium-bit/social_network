import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';

type AuthType = {
    login: string | null
    isAuth: boolean
    logout: () => (dispatch: any) => void
}

const Header = (props: AuthType) => {
    return (
        <header className={classes.header}>
            <img src='https://wp.nkdev.info/youplay/demo-shooter/wp-content/themes/youplay/assets/images/logo-light.png'
                 alt={"logo"}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;