import { Environment, Network, Store, RecordSource } from "relay-runtime";

import dataFetch from "./dataFetch";

const store = new Store(new RecordSource(), { gcReleaseBufferSize: 5 });

const network = Network.create((params, variables) => {

    if (process.env.NODE_ENV === "development") {
        console.log(`Query: ${params}, Variables: ${variables}`);
    }

    return dataFetch(params.text, variables);
});


export default new Environment({
    network,
    store
});