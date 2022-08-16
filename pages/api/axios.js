import axios from 'axios';
import {SERVER_URL} from "../utils/config";


const BASE_URL = SERVER_URL;

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});