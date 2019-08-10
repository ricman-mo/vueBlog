import axios from 'axios';
const RESOURCE_NAME = '/api/rest/v1/users';
const LOGIN = 'login';
const REGISTER = 'register';
export default {

    login(username, password) {
        let data = {
            username: username,
            password: password
        };
        return axios.post(`${RESOURCE_NAME}/${LOGIN}`, data);
    },
    register(username, password) {
        let data = {
            username: username,
            password: password
        };
        return axios.post(`${RESOURCE_NAME}/${REGISTER}`, data);
    },

};