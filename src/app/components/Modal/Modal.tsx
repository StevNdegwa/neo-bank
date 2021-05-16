import { FC, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Overlay, Content } from "./styles";

let portal: HTMLDivElement = document.createElement("div");

export interface ModalProps {
    isOpen: boolean;
    closeModal?: ()=>void;
    closeOnOverlayClick?: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, children, closeModal, closeOnOverlayClick })=>{
    useEffect(()=>{
        document.body.appendChild(portal)
        
        return ()=>{
            document.body.removeChild(portal);
        }
    }, []);

    const handleOverlayClick = useCallback(()=>{
        if(closeOnOverlayClick){
            closeModal && closeModal();
        }
        /* eslint-disable */
    }, []);

    return ReactDOM.createPortal(
        <Overlay show={ isOpen } onClick={handleOverlayClick}>
            <Content>
                { children }
            </Content>
        </Overlay>,
        portal
    )
}

export default Modal;