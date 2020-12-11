import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authoriztion'] = "AUTH_TOKEN";

export default instance;