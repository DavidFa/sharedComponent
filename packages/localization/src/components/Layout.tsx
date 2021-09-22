import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Wrapper = styled.div`
width:1000px;
margin: 20px auto;
display:flex;
flex-direction: row;
`;


const Layout: React.FC = () => {
    const isShowFlyout = useAppSelector((state) => state.localization.isShowFlyout);

    return <Wrapper>
        <LeftPanel />
        {isShowFlyout && <RightPanel />}
    </Wrapper>
}

export default Layout;