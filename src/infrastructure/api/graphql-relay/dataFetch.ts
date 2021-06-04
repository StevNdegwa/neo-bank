import HttpPost from "../../HttpPost";

export default function dataFetch(query: string | null | undefined, variables: any) {

    let url = new URL("http://localhost:5001/neo-bank-b1ffd/us-central1/api/graphql"),
        data = { query, variables },
        headers = new Headers({
            "Content-Type": "application/json"
        })

    return new HttpPost(url, data, headers).post();

}