import axios from "axios";
import {UsersType} from "./../Redux/users-reducer"

type TypeofUsers = {
    items: Array<UsersType>
    error: string | null
    totalCount: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "809d50f8-0790-4db8-ac8b-7ff6bbc71c22"
    }
});

export const usersAPI = {
getUsers (currentPage: number = 1, pageSize: number = 10) {
    return instance.get<TypeofUsers>(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        });
},
follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
},
getProfile(userId: number) {
    console.warn('Obsolete methot. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
            return instance.get('profile/' + userId);
        },
    getStatus(userId: number) {
            return instance.get('profile/status/' + userId);
        },
    updateStatus(status: string) {
            return instance.put('profile/status', {status: status});
        },
    }

export const authAPI = {
me() {
    return instance.get(`auth/me`)

}
}

