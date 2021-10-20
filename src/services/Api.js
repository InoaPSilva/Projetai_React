import Axios from 'axios';

const Http  = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export default Http
