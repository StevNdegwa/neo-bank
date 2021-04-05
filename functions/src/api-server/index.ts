import * as express from "express";
import { graphqlHTTP } from "express-graphql";


import schema from "./middlewares/graphql/schema";

const app: express.Express = express();

app.use("/gql-api", graphqlHTTP({ schema, graphiql: true }))

export default app;