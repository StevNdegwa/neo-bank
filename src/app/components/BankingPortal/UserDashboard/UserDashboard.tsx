import { FC } from "react";
import { Wrapper } from "./styles";
import { usePreloadedQuery } from "react-relay";

export interface UserDashboardProps {
    dashboardQueryRef:any,
    dashboardQuery:any
}

const UserDashboard: FC<UserDashboardProps> = ({ dashboardQuery, dashboardQueryRef })=>{
    const data = usePreloadedQuery(dashboardQuery, dashboardQueryRef);
   
    console.log(data);
    
    return (
        <Wrapper>
            User dashboard
        </Wrapper>
    )
}

export default UserDashboard;