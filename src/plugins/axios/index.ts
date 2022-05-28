import axios from 'axios'
import interceptors from '@/plugins/axios/interceptors'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'x-api-key': process.env.VUE_APP_CATS_KEY
  }
})

interceptors(instance)

export default instance
