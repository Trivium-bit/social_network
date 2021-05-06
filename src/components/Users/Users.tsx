import React from 'react';
import styles from './users.module.css';
import {UsersType} from "../../Redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

let Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {/*<button onClick={getUsers}>Get users</button>*/}
        {
            props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : u.photos.large} className={styles.userPhoto}/>
                        </div>
                    </span>
                <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>
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