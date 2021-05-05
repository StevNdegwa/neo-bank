import { Environment, Network, Store, RecordSource } from "relay-runtime";

import graphqlApiFetch from "./graphqlApiFetch";

const store = new Store(new RecordSource(), { gcReleaseBufferSize: 5 });

const network = Network.create((params, variables)=>{
    console.log(`Query: ${params.text}, ${variables}`);
    return graphqlApiFetch(params.text, variables);
});


export default new Environment({
    network,
    store
});