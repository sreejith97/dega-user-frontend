import axios from 'axios';

const instance = axios.create({
    baseURL:'https://dega-backend-users.herokuapp.com/api',
});

export default instance