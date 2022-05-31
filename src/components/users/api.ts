import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "123"
    }
})
export const usersAPI = {
    getusers(currentpage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentpage}&count=${pageSize}`)
            .then(res => res.data)
    }


}



