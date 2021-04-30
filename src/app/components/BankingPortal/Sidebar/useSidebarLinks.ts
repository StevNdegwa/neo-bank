import { useState } from "react";

export default function useSidebarLinks(){
    const [ currentLinks, setCurrentLinks ] = useState<Array<any>>([]);



    return [currentLinks, setCurrentLinks];
}