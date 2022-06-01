import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.1/`,
    headers: {
        "API-KEY": "918ec3c9-ea92-470f-ae86-9d6bbf63b653"
    }
})
export const usersAPI = {
    getUsers(currentpage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentpage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
    getMyLink() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    }
}



