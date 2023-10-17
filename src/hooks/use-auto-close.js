import { useEffect, useState, useRef } from "react";

function useAutoClose() {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(() => { 
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler,true);

        return () => {
            document.removeEventListener('click', handler)

        };

    }, [])
    return {isOpen, setIsOpen, divEl};


}

export default useAutoClose;