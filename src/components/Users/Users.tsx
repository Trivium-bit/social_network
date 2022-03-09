import { UsersType } from "../../Redux/users-reducer";
import Paginator from '../common/Paginator/Paginator';
import User from './User';

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

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }: PropsType) => {
    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
        <div>
            {
                users.map((u: any) =>
                    <User key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )
            }
        </div>
    </div>
}

export default Users