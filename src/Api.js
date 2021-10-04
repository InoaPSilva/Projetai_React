import Axios from 'axios';

const Http  = Axios.create({
    baseURL: "http://localhost:4000"
})
export default Http
