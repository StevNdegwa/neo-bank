import { usePreloadedQuery } from "react-relay";
import Login from "../../infrastructure/api/graphql-relay/Login";

export default function useAuthN(loginQueryRef: any) {
    const { account }: any = usePreloadedQuery(Login.query, loginQueryRef);

    return { account };
}