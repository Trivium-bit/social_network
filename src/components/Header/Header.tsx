import React from 'react';
import classes from './Header.module.css';

const Header = () =>{
    return (
    <header className={classes.header}>
        <img src='https://wp.nkdev.info/youplay/demo-shooter/wp-content/themes/youplay/assets/images/logo-light.png'/>
    </header>
    )
}

export default Header;