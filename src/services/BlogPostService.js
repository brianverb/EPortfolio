import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBlogs() {
    return apiClient.get('/blogs')
  },
  getBlog(id) {
    return apiClient.get('/blogs/' + id)
  }
}