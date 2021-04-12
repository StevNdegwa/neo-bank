import * as express from "express";
import * as cors from "cors";
import { graphqlHTTP } from "express-graphql";


import schema from "./middlewares/graphql/schema";

const app: express.Express = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }))

export default app;