

const BankingPortal: React.FC<BankingPortalProps> = ({ user })=>{
    console.log(user);
    
    return (
        <div>
            Welcome home
        </div>
    )
}

export type BankingPortalProps = { 
    user:any
}

export default BankingPortal;