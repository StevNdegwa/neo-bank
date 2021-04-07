import {writeFileSync} from "fs";
import { printSchema } from "graphql";
import schema from "../api/middlewares/graphql/schema";

writeFileSync("../schema.graphql", printSchema(schema))