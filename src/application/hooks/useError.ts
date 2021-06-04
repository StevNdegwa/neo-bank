import { useCallback, useState } from "react";

export default function useError(clearErrorCallback: () => void) {
    const [error, setError] = useState<Error | null>(null);

    const clearError = useCallback(() => {
        setError(null);
        clearErrorCallback();
        /* eslint-disable */
    }, []);

    return { error, setError, clearError };
}