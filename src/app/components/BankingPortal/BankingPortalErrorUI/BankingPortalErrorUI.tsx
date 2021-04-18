import { FC } from "react";
import { EBFallBack } from "../../../types";


export interface BankingPortalErrorUIProps extends EBFallBack {
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