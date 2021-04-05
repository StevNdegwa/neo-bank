import {writeFileSync} from "fs";
import { printSchema } from "graphql";
import schema from "../api-server/middlewares/graphql/schema";

writeFileSync("../schema.graphql", printSchema(schema))