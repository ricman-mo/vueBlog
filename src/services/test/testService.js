import axios from 'axios';
const RESOURCE_NAME = '/api/rest/v1/test';
const GREETING = 'greeting';

export default {
    greeting() {
        return axios.get(`${RESOURCE_NAME}/${GREETING}`);
    }
};