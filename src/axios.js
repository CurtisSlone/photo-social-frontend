import axios from 'axios'

const instance = axios.create({
    baseURL: "HEROKU BACKEND"
})

export default instance