import UserDashboard from "./UserDashboard";
import { Summary } from "./Accounts";
import { appConfig } from "./BankingPortal";

const routes =  [
    {
        path: "/",
        component: () => {
            let [dashboardQueryRef, dashboardQuery] = appConfig;
            return (
                <UserDashboard
                    dashboardQueryRef= { dashboardQueryRef }
                    dashboardQuery={ dashboardQuery }
                />
            )
        }
    },
    {
        path:"/accounts-summary/",
        component: ()=>(
            <Summary/>
        )
    }
];

export default routes;