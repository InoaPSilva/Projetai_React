import Axios from 'axios';

const Http  = Axios.create({
    baseURL: "http://localhost:8089/"
})

export default Http
