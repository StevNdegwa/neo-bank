import * as express from "express";
import * as cors from "cors";
import { graphqlHTTP } from "express-graphql";


import schema from "./middlewares/graphql/schema";
import { IncomingMessage, ServerResponse } from "node:http";

const app: express.Express = express();

app.use(cors());

app.use("/graphql", 
    (request: IncomingMessage, response:ServerResponse)=>{

        return graphqlHTTP({ 
            schema, 
            graphiql: true,
            context: { request, response } 
        })
        (request as express.Request, response)
    }
)

export default app;