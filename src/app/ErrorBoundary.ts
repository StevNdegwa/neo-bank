import { Component, ReactElement } from "react";

export type ErrorBoundaryProps = {
    fallback:(state: { error: Error | null }) => ReactElement,
}

type State = {
    error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    state = {
        error: null
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render(){
        const { children, fallback } = this.props;
        const { error } = this.state;

        if(error !== null){

            return fallback({ error });

        }

        return children;
    }
}

export default ErrorBoundary;