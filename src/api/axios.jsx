import axios from "axios"

export const api = axios.create({
    baseURL: "https://waste2wealth.onrender.com/api/",
})
// const navigate = useNavigate()

// api.interceptors.request.use(
//     config => {
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     },
// )
// api.interceptors.response.use(
//     res => {
//         // console.log("res:::",res.data.code)
//         // if(res.data.code === 401) {
//         //   return  navigate
//         // }
//         return res.data
//     },
//     error => {
//         return Promise.reject(error)
//     },
// )
