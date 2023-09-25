import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'text/json',
    },
})


export default instance