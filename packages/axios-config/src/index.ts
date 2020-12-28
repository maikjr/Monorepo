import axios from 'axios'

const api = axios.create({
  baseURL: 'https://API_URL'
})

export default api
