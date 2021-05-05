import { useState } from "react";
import {
  MdAccountBalanceWallet,
  MdMenu,
  MdPayment,
  MdPeople,
  MdPublic,
  MdAccountBalance,
} from "react-icons/md";

import {
  Wrapper,
  Action,
  NeoBank,
  Drawer,
  Actions,
} from "./styles";


import { OverLay } from "../styles";
import routes from "../../../config/routes";

import { History, MainLink, Showing } from "./elements";

const Sidebar = () => {
  const [showOverlay, setShowOverLay] = useState<boolean>(false);
  const [layers, setLayers] = useState([]);
  const [active, setActive] = useState<string>("accounts");

  return (
    <>
      <Wrapper>
        <Actions>
          <Action onClick={() => setShowOverLay((s) => !s)}><MdMenu /></Action>
          <Action active={active === "accounts"}><MdAccountBalanceWallet /></Action>
          <Action active={active === "payments"}><MdPayment/></Action>
          <Action active={active === "beneficiary"}><MdPeople/></Action>
          <Action active={active === "service-requests"}><MdPublic/></Action>
          <Action active={active === "personal-financial-management"}><MdAccountBalance/></Action>
        </Actions>
        <Drawer showing={showOverlay}>
          <NeoBank>NEO BANK</NeoBank>
          {
            !layers.length ? (
              <div>
                <MainLink setActive={()=>setActive("accounts")} setLayers={setLayers} link={routes.get("accounts")}/>
                <MainLink setActive={()=>setActive("payments")} setLayers={setLayers} link={routes.get("payments")}/>
                <MainLink setActive={()=>setActive("beneficiary")} setLayers={setLayers} link={routes.get("beneficiary")}/>
                <MainLink setActive={()=>setActive("service-requests")}  setLayers={setLayers} link={routes.get("service-requests")}/>
                <MainLink setActive={()=>setActive("personal-financial-management")} setLayers={setLayers} link={routes.get("personal-financial-management")}/>
              </div>
            ) : (
              <>
                {
                  layers.map((layer: any, index: number) => (
                    <History key={index} setLayers={setLayers} index={index} link={layer} />
                  ))
                }
                <Showing layers={layers} setLayers={setLayers} />
              </>
            )
          }
        </Drawer>
      </Wrapper>
      <OverLay show={showOverlay} onClick={() => setShowOverLay(false)} />
    </>
  );
};

export default Sidebar;
