import { FC } from "react";

import { Info } from "../styles";

const AuthnErrorFallback: FC<AuthnErrorFallbackProps> = ({ tryAgain, error })=>{
    const handleClick = ()=>{
        tryAgain && tryAgain();
    }

    return (<div>
        <Info>
            { `${error}` }
        </Info>
        <Info style={ { padding: "15px" } }>
            <button className="filled primary rounded medium" onClick={handleClick}>Try again</button>
        </Info>
    </div>)
};

export interface AuthnErrorFallbackProps {
    tryAgain?: ()=>void;
    error?: any;
}

export default AuthnErrorFallback;