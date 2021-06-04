import { useState } from "react";

export default function useModal(){
    const [ isOpen, setIsOpen ] = useState(false);

    const closeModal = ()=>{
        setIsOpen(false);
    }

    const openModal = ()=>{
        setIsOpen(true);
    }

    return {isOpen, closeModal, openModal};
}