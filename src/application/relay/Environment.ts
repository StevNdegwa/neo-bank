import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { HttpPostRequest } from "../../infrastructure/network/classes";

export function dataFetch(query: string | null | undefined, variables: any) {
    console.log("Here---")
    let data = { query, variables },
        headers = new Headers({
            "Content-Type": "application/json"
        })

    return HttpPostRequest.request("/graphql", headers, data);

}


const store = new Store(new RecordSource(), { gcReleaseBufferSize: 5 });

const network = Network.create((params, variables) => {

    if (process.env.NODE_ENV === "development") {
        console.log(`Query: ${params}, Variables: ${variables}`);
    }

    return dataFetch(params.text, variables);
});

export const environment = new Environment({
    network,
    store
})