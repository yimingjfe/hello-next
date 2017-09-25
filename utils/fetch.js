import axios from 'axios'

let fetcher = axios.create({
  method: 'post',
  // baseURL: baseUrl,
  baseURL: 'http://10.0.31.125:8081',
  // baseURL: 'http://10.0.31.125:8081',
  withCredentials: true
})

export default fetcher
