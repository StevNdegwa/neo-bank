import React, { FC, ReactElement, useState } from "react";
import { MdAccountBalanceWallet, MdMenu, MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  Action,
  OverLay,
  Dir,
  NeoBank,
  MainLinks,
  DirLinks,
  Drawer,
  Actions,
} from "./styles";

import routes from "../../../config/routes";

import useSidebarLinks from "./useSidebarLinks";

const Sidebar = () => {
  const [showOverlay, setShowOverLay] = useState<boolean>(false);
  const [links, setLinks] = useState([]);
  const [layers, setLayers] = useState([]);

  const MainLink = ({ link }: any) => (
    <Dir
      onClick={
        ()=>{
          setLayers((layers)=>(layers.concat(link)))
          setLinks(link.links)
        }
      }
      >{link.label} <MdChevronRight/></Dir>
  );

  const SubLink = ({link}:any)=>(
    <Dir>{link.label}</Dir>
  )

  const Showing = ()=>{
    return (
      <>
        {
          links.map((link:any)=>{
            if(link.links){
              return (<MainLink link={link} />)
            }
            return (<SubLink link={link} />);
          })
        }
      </>
    )
  }

  return (
    <>
      <Wrapper showing={showOverlay}>
        <Actions>
          <Action onClick={() => setShowOverLay((s) => !s)}>
            <MdMenu />
          </Action>
          <Action>
            <MdAccountBalanceWallet />
          </Action>
        </Actions>
        <Drawer>
          <NeoBank>NEO BANK</NeoBank>
          {
            !layers.length ?
            <MainLinks show={!layers.length}>
              <MainLink link={routes.get("payments")}/>
            </MainLinks> :
            <>
              {layers.map((layer: any) => {
              return <MainLink link={layer}/>;
            })}
            <Showing/>
            </>
          }
        </Drawer>
      </Wrapper>
      <OverLay show={showOverlay} onClick={() => setShowOverLay(false)} />
    </>
  );
};

const SideLink: FC<{ link: any }> = ({ link }) => {
  return (
    <>
      <Dir>
        <NavLink to={link.url}>{link.label}</NavLink>
      </Dir>
      <DirLinks show={true}>
        {link.links &&
          link.links.map((link: any, idx: any) => (
            <li key={idx}>
              <NavLink to={link.url}>{link.label}</NavLink>
            </li>
          ))}
      </DirLinks>
    </>
  );
};

export default Sidebar;
