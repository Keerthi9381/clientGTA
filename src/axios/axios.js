import axios from 'axios';

const axiosFetch= axios.create({
    baseURL: 'http://localhost:9090',
    headers:{
        Accept:'application/json',
    },
});

export default axiosFetch;