import { FC, MouseEvent } from "react";
import { Pages } from "./CreateAccount";

export type FooterProps = {
    page: Pages;
    setPage: (page:Pages)=>void
}

const Footer:FC<FooterProps> = ({ page, setPage })=>{
    const nextClick = (evt:MouseEvent<HTMLAnchorElement>)=>{
        evt.preventDefault(); 
        setPage(Pages.PROFILE)
    }

    const showFooter = ()=>{
        switch (page) {
            case Pages.DETAILS:
                
                return (
                    <div>
                        <a onClick={nextClick} className="button-look filled primary rounded small" href="/">
                            Next
                        </a>
                    </div>
                );
            case Pages.PROFILE:

                return (
                    <div>
                        <a 
                            onClick={(evt)=>{ evt.preventDefault(); setPage(Pages.DETAILS) }} 
                            style={{marginRight:"10px"}} 
                            className="button-look filled primary rounded small"
                            href="/"
                            >
                            Back
                        </a>
                        <button type="submit" className="filled primary rounded medium">
                            Create Account
                        </button>
                    </div>
                );
            default:
                return null;
        }
    }

    return showFooter();
}

export default Footer;