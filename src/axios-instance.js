import axios from 'axios';

const instance = axios.create({
    "headers.post['Content-Type']" : 'application/json'
})

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN from instance';

export default instance;