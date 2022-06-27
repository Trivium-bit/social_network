import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
            <FontAwesomeIcon icon={['fal', 'home']} fixedWidth /><Link to="/profile" className={classes.activeLink}> Profile</Link>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <Link to="/dialogs" className={classes.activeLink}>Messages</Link>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <Link to="/users" className={classes.activeLink}>Users</Link>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <Link to="/news " className={classes.activeLink}>News</Link>
            </div>
            <div className={classes.item}>
                <Link to="/musik" className={classes.activeLink}> Music</Link>
            </div>
            <div className={classes.item}>
                <Link to="/settigs" className={classes.activeLink}>Settings</Link>
            </div>
        </nav>
    )
}
export default Navbar;