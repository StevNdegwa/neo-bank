import { useState } from "react";

export default function useDisclosure(args: Partial<{ isOpen : boolean, onClose: ()=>void, onOpen: ()=>void }>){
    const [ isOpen, setIsOpen ] = useState<boolean>(args.isOpen || false);

    const onClose = ()=>{
        if(args.onClose){
            args.onClose();
        }
        setIsOpen(false);
    }

    const onOpen = ()=>{
        if(args.onOpen){
            args.onOpen();
        }
        setIsOpen(true);
    }

    const onToggle = ()=>{
        setIsOpen((s)=>!s);
    }

    return { isOpen, onClose, onOpen, onToggle };
}