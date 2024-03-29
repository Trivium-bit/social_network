import styles from './users.module.css';
import { UsersType } from "../../Redux/users-reducer";
import default_ava from '../../assets/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';

type PropsType = {
    user: UsersType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let User = ({ user, followingInProgress, follow, unfollow }: PropsType) => {

    return (
        <div>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : default_ava} alt={"avatar"}
                    className={styles.userPhoto} />
            </NavLink>
            <span>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}> Unfollow </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow </button>
                    }
                </div>
            </span>
            <span>
                <div>
                    <span>
                        <div> {user.name} </div>
                        <div> {user.status} </div>
                    </span>
                    <span>
                        <div> {"u.location.country"} </div>
                        <div> {"u.location.city"} </div>
                    </span>
                </div>
            </span>
        </div>)
}
export default User