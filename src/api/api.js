import axios from 'axios'
//import qs from 'qs'

axios.defaults.withCredentials = true

const base = 'http://localhost:8003'

export const getBookInfo = params => { return axios.get(`${base}/data/v1.0/book_list`, {params: params}).then(res => res.data); }