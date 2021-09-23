import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";
import classes from "./Loading.module.css";

const Wrapper = styled.div`
text-align:center;
`;


const Loading: React.FC = () => {
    const loading = useAppSelector(state => state.message.loading);
    return <Wrapper>{loading && <div className={classes.loading}>Loading...</div>}</Wrapper>;
}

export default Loading;