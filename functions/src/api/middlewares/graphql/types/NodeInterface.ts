import { fromGlobalId, GraphQLNodeDefinitions, nodeDefinitions } from "graphql-relay";

export const { nodeInterface, nodeField, nodesField }: GraphQLNodeDefinitions = nodeDefinitions(
    (globalId:string )=>{
        const { type, id } = fromGlobalId(globalId);
        
        console.log(id);
        
        switch (type) {
            case "Account":
                return { name:"Random A/c" };
            default:
               return null;
        }
    }
)