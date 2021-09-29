import { useState } from 'react'
import Http from '../api'

export default function useGetAllProjects() {
    const [data, setData] = useState({});
    const getData = async () => http.get("/project/list").then((response) => setData(response.data)).catch(console.log)
    return { getData, data }
}
