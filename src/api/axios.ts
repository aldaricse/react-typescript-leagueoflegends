import axios from 'axios';
const BASE_URL = import.meta.env.VITE_URL_API

export default axios.create({
  baseURL: BASE_URL + "/cdn/13.11.1/data"
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});