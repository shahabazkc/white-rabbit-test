import { instance } from "./axios_config";


//Fetching User
export const fetchUsers = async () => {
    try {
        let res = await instance.get('/get-users');
        return res;
    }
    catch (err) {
        return { status: false }
    }
}

//Adding User Handling
export const addUser = async (data) => {
    try {
        let res = await instance.post('/add-user', data);
        return res;
    } catch (err) {
        return { status: false };
    }
}

//get user full data
export const getUser = async (userId) => {
    try {
        let res = await instance.get(`/get-user/${userId}`);
        return res;
    } catch (err) {
        return { status: false }
    }
}