import * as functions from "firebase-functions";
import * as express from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
// functions.logger.info("Hello logs!", {structuredData: true});
// response.send("Hello from Firebase!");
// });


let schema = buildSchema(`
    type Query {
        hello: [String]
        userAccount(id: ID): UserAccount! 
    }
    type UserAccount {
        id: ID!
        name: String!
    }
`);

let root = {
    hello: () => [
        "Hello", "Jambo"
    ],
    userAccount: (x : any) => {
        console.log(x);
        return {id: '00191', name: 'Unexpected name'}
    },
    UserAccount: {
        id: () => `STNG24090`,
        name: () => "Stephen Ndegwa Ng'ang'a"
    }
}

let app = express();

app.use("/hello", graphqlHTTP({schema, rootValue: root, graphiql: true}))

export const api = functions.https.onRequest(app);
