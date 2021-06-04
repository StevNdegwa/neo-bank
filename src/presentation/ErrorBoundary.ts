import { Component, ReactElement } from "react";
import { EBFallBack } from "./types";

export type ErrorBoundaryProps = {
    fallback:(state: EBFallBack ) => ReactElement,
    onRetry?: ()=>void
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

    _retry = ()=>{
        if(this.props.onRetry){
            this.props.onRetry();
        }
        this.setState({ error: null })
    }

    render(){
        const { children, fallback } = this.props;
        const { error } = this.state;

        if(error !== null){

            return fallback({ error, retry: this._retry });

        }

        return children;
    }
}

export default ErrorBoundary;