import { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { Overlay, Content } from "./styles";

let portal: HTMLDivElement = document.createElement("div");

export interface ModalProps {
    isOpen: boolean;
    closeModal: ()=>void;
}

const Modal: FC<ModalProps> = ({ isOpen, children, closeModal })=>{
    useEffect(()=>{
        document.body.appendChild(portal)
        
        return ()=>{
            document.body.removeChild(portal);
        }
    }, []);

    return ReactDOM.createPortal(
        <Overlay show={ isOpen } onClick={()=>closeModal()}>
            <Content>
                { children }
            </Content>
        </Overlay>,
        portal
    )
}

export default Modal;