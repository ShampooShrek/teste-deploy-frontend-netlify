import axios from "axios";


const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ?
    "http://localhost:3333" : "http://api.example.com.br.fodaaa"
})

export default api