import axios from "axios";

import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})




export default axiosInstance