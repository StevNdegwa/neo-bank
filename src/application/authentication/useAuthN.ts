import { usePreloadedQuery } from "react-relay";
import Login from "../authentication/Login";

export default function useAuthN(loginQueryRef: any) {
    const { account }: any = usePreloadedQuery(Login.query, loginQueryRef);

    return { account };
}