import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";



let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            <button onClick={getUsers}>Get usres</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photo.small !== null ? u.photo.small : userPhoto} className={styles.userPhoto} />
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}> Unfollow </button>
                                : <button onClick={() => { props.follow(u.id) }}> Follow </button>
                            }

                        </div>
                    </span>
                    <span>
                        <div>
                            <span>
                                <div> {u.name} </div>
                                <div> {u.status} </div>
                            </span>
                            <span>
                                <div> {"u.location.country"} </div>
                                <div> {"u.location.city"} </div>
                            </span>
                        </div>
                    </span>
                </div>)
            }
        </div>
}

export default Users