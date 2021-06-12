import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(
    (request: AxiosRequestConfig)=>{
        if(request.url?.includes("banking")){
            let token = localStorage.getItem("token") || "";
            request.headers["Authorization"] = `Basic ${token}`
        }
        return request;
    }
)

axios.defaults.baseURL = "http://localhost:5001/neo-bank-b1ffd/us-central1/api/";

export default axios;