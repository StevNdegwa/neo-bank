import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Wrapper, Action, OverLay } from "./styles";

const Sidebar = ()=>{
    const [showOverlay, setShowOverLay] = useState<boolean>(false);

    return (
        <>
        <Wrapper showing={showOverlay}>
            <Action onClick={()=>setShowOverLay((s)=>!s)}>
                <MdMenu/>
            </Action>
        </Wrapper>
        <OverLay show={showOverlay} onClick={()=>setShowOverLay(false)}/>
        </>
    )
}

export default Sidebar;