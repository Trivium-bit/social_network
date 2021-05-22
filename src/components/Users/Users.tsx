import React from 'react';
import styles from './users.module.css';
import {toggleFollowingProgress, UsersType} from "../../Redux/users-reducer";
import default_ava from '../../assets/images/default_ava.jpg'
import axios from "axios";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    followingInProgress: boolean


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
        {
            props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : default_ava} alt={"avatar"}
                                 className={styles.userPhoto}/>
                        </div>
                    </span>
                <span>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "809d50f8-0790-4db8-ac8b-7ff6bbc71c22"
                                        }
                                    })
                                        .then((response: any) => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false)
                                        });
                                }}> Unfollow </button>

                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "809d50f8-0790-4db8-ac8b-7ff6bbc71c22"
                                        }
                                    })
                                        .then((response: any) => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false)
                                        });

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