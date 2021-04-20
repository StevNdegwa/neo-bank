import { MdPowerSettingsNew } from "react-icons/md";
import { Wrapper, Action } from "./styles";
import { useHistory } from "react-router-dom";

const Header = ()=>{
    const history = useHistory();

    const exitApplication = ()=>{
        history.push("/retail-login", { user:null });
    }
    return (
        <Wrapper>
            <div></div>
            <div>
                <Action className="transparent" onClick={exitApplication} title="Log Out">
                    <MdPowerSettingsNew/>
                </Action>
            </div>
        </Wrapper>
    )
}

export interface HeaderProps { }

export default Header;