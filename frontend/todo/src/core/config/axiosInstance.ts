import axios from "axios"
import { baseUrl } from "../constants/strings"

export const axiosInstance = axios.create({
    baseURL: baseUrl,
})