import { FC } from "react";
import { Redirect } from "react-router-dom";
import { EBFallBack } from "../../../types";


export interface BankingPortalErrorUIProps extends EBFallBack {
  error: Error | null
}

const BankingPortalErrorUI: FC<BankingPortalErrorUIProps> = ({ error })=>{
  if(error){
    return <Redirect to="/retail-login"/>  
  }
  return <Redirect to="/"/>
}

export default BankingPortalErrorUI;