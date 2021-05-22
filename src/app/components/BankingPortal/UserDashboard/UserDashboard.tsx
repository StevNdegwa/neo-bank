import { FC, useEffect } from "react";
import { Wrapper } from "./styles";
import { usePreloadedQuery } from "react-relay";
import LastTransactions from "./LastTransactions";
import MyDashboard from "./MyDashboard";
import Welcome from "./Welcome";
import Favourites from "./Favourites";

export interface UserDashboardProps {
    dashboardQueryRef:any,
    dashboardQuery:any
}

const UserDashboard: FC<UserDashboardProps> = ({ dashboardQuery, dashboardQueryRef })=>{
    const data: any = usePreloadedQuery(dashboardQuery, dashboardQueryRef);
   
    try{
        let str = JSON.stringify(data?.sessionLogin.token);
        localStorage.setItem("token", str);
    }catch(error){}

    return (
        <Wrapper>
            <LastTransactions/>
            <Welcome/>
            <MyDashboard/>
            <Favourites/>
        </Wrapper>
    )
}

export default UserDashboard;