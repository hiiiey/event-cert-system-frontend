import axios from 'axios';
// This file sets up an Axios instance for making API requests.
// It configures the base URL and enables credentials for cross-origin requests.

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
  withCredentials: true, 
});

export default api;
