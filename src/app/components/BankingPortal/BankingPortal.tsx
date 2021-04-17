import PageLayout from "../../layouts/PageLayout";
import Sidebar from "./Sidebar";
import { Header, Content } from "./styles";

export type BankingPortalProps = {
    user: any;
}

const BankingPortal: React.FC<BankingPortalProps> = ({ user })=>{
    console.log(user);
    
    return (
        <PageLayout>
            <Sidebar/>
            <Content>
                <Header></Header>
            </Content>
        </PageLayout>
    )
}

export default BankingPortal;