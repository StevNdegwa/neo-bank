import axios from "axios";

export default function graphqlApiFetch(query: string | null | undefined, variables: any){
    return axios({
        method: "post",
        url:"http://localhost:5001/neo-bank-b1ffd/us-central1/api/graphql",
        data: {
            query,
            variables
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(({data})=>data)
}