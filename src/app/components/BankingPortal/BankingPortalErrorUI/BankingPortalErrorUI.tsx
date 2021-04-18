import { FC } from "react";

export type BankingPortalErrorUIProps = {
  error: Error | null
}

const BankingPortalErrorUI: FC<BankingPortalErrorUIProps> = ({ error })=>{
  return (
    <div>
      { `${error}` }
    </div>
  )
}

export default BankingPortalErrorUI;