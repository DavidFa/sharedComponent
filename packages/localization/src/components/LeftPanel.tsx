import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { FIELD_NAME, FIELD_DESC } from '../models/Constants';

import Message from "./Message";
import Loading from "./Loading";
import useLeftPanel from "./hooks/useLeftPanel";

const Panel = styled.div`
margin: 10px;
padding: 20px;
background: #eee;
box-shadow: 0 6px 20px 10px #ccc;
border-radius: 6px;
`;

const Form = styled.form`
`;

const Button = styled.button`
padding: 5px 10px;
`;

const Wrapper = styled.div`
text-align:right;
`;


const LeftPanel: React.FC = () => {

    const { localization, onShowFlyoutHandler, onChangeFieldHandler, onSubmitHandler } = useLeftPanel();

    return <Panel>
        <Message />
        <Loading />
        <Form data-testid="leftPanelForm" onSubmit={onSubmitHandler}>
            <InputForm label={FIELD_NAME} placeholder={FIELD_NAME} length={20} value={localization.name.tem} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <InputForm label={FIELD_DESC} placeholder={FIELD_DESC} length={50} value={localization.description.tem} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <Wrapper><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default LeftPanel;