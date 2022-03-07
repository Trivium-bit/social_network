import React from 'react';
import styles from './paginator.module.css';
import { setUsers, UsersType } from "../../../Redux/users-reducer";
import default_ava from '../../assets/images/default_ava.jpg'
import axios from 'axios';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: PropsType) => {
   /*  if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        });
    }
 */
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
 
}

export default Paginator