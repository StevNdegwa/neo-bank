import { FC, ReactNode } from "react";
import { Wrapper } from "./styles";

export type PageLayoutProps = {
    children: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ children })=>{
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
};

export default PageLayout;