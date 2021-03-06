import { MdPowerSettingsNew } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Modal, { useModal } from "../../Modal";
import { Wrapper, Action, ConfirmExit } from "./styles";
import PortalSessionContext from "../../../../application/context/PortalSessionContext";
import { useContext } from "react";


const Header = ()=>{
    const { isOpen, closeModal, openModal } = useModal();
    const history = useHistory();
    const portalSessionContext = useContext(PortalSessionContext);

    const exitApplication = ()=>{
        return openModal();
    }

    const handleConfimClick = ()=>{
        closeModal();
        portalSessionContext?.killApp();
        return history.push("/retail-login", { user:null });
    }

    const handleCancelClick = ()=>{
        return closeModal();
    }

    return (
        <Wrapper>
            <div></div>
            <div>
                <Action className="transparent" onClick={exitApplication} title="Log Out">
                    <MdPowerSettingsNew/>
                </Action>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <ConfirmExit>
                    <header>Application exit</header>
                    <main>
                        Confirm that you want to exit the application.
                    </main>
                    <footer>
                        <button onClick={handleCancelClick}>Cancel</button>
                        <button className="filled primary" style={{ marginLeft: "15px" }} onClick={handleConfimClick}>Confirm</button>
                    </footer>
                </ConfirmExit>
            </Modal>
        </Wrapper>
    )
}

export interface HeaderProps { }

export default Header;