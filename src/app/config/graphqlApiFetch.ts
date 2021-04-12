import axios from "axios";

export default function graphqlApiFetch(query: string, variables: any){
    return axios({
        method: "post",
        url:"",
        data: {
            query,
            variables
        },
        headers: {
            "Content-Type": "application/json",
        }
    })
}