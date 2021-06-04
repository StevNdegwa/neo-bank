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


export default axios;