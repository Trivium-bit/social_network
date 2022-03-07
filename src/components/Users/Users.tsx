import React from 'react';
import styles from './users.module.css';
import { setUsers, UsersType } from "../../Redux/users-reducer";
import default_ava from '../../assets/images/default_ava.jpg'
import axios from 'axios';
import Paginator from '../common/Paginator/Paginator';


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    setUsers: (users: Array<UsersType>) => void
}

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}: PropsType) => {

    if(users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        });
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
        {
            users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : default_ava} alt={"avatar"}
                            className={styles.userPhoto} />
                    </div>
                </span>
                <span>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)}
                            onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow </button>

                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}
                            >Follow </button>
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