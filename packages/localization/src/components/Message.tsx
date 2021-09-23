import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import { Status } from "../models/Types";


const Wrapper = styled.div`
text-align:center;
color: ${props => props.color}
`;


const Message: React.FC = () => {
    const message = useAppSelector(state => state.message);
    let color = message.status === Status.fail ? 'red' : message.status === Status.success ? "green" : "";

    return <Wrapper color={color}>{message.message}</Wrapper>;
}

export default Message;