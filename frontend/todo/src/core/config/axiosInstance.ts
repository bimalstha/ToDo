import axios from "axios"
import { baseUrl } from "../constants/strings"

export const axiosInstance = axios.create({
    withCredentials:true,
    baseURL: baseUrl,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
    
})