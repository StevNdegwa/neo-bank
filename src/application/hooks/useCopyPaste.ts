import { Dispatch, useCallback, useState } from "react";

//Hooks for using with clipboard

export function useCopy(setError?: Dispatch<Error>) {
    const [copied, setCopied] = useState<boolean>(false);

    const copy = useCallback(async (text) => {
        try {
            
            await navigator.clipboard.writeText(text.toString());
            
            return setCopied(true);
        
        } catch (error) {
            if (setError)
                return setError(error);
        }
        /* eslint-disable */
    }, []);

    return { copied, copy };
}

export function usePaste(setError?: Dispatch<Error>) {
    
    const paste = useCallback(async () => {
        
        try {
            
            let text = await navigator.clipboard.readText();
            
            return text;
        
        } catch (error) {
            
            if (setError)
                return setError(error);
        
        }

    }, []);

    return paste;
}