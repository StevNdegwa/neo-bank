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
import links from "../../../config/links";
import { useDisclosure } from "../../../../utils/hooks";

import { History, MainLink, Showing } from "./elements";

const Sidebar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure({});
  const [layers, setLayers] = useState([]);
  const [active, setActive] = useState<string>("accounts");

  return (
    <>
      <Wrapper>
        <Actions>
          <Action onClick={onToggle}><MdMenu /></Action>
          <Action active={active === "accounts"}><MdAccountBalanceWallet /></Action>
          <Action active={active === "payments"}><MdPayment/></Action>
          <Action active={active === "beneficiary"}><MdPeople/></Action>
          <Action active={active === "service-requests"}><MdPublic/></Action>
          <Action active={active === "personal-financial-management"}><MdAccountBalance/></Action>
        </Actions>
        <Drawer showing={isOpen} aria-hidden={isOpen ? "false" : "true"} aria-label="Banking services">
          <NeoBank>NEO BANK</NeoBank>
          {
            !layers.length ? (
              <div>
                <MainLink setActive={()=>setActive("accounts")} setLayers={setLayers} link={links.get("accounts")}/>
                <MainLink setActive={()=>setActive("payments")} setLayers={setLayers} link={links.get("payments")}/>
                <MainLink setActive={()=>setActive("beneficiary")} setLayers={setLayers} link={links.get("beneficiary")}/>
                <MainLink setActive={()=>setActive("service-requests")}  setLayers={setLayers} link={links.get("service-requests")}/>
                <MainLink setActive={()=>setActive("personal-financial-management")} setLayers={setLayers} link={links.get("personal-financial-management")}/>
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
      <OverLay show={isOpen} onClick={onClose} />
    </>
  );
};

export default Sidebar;
