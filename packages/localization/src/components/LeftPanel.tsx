import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { FIELD_NAME, FIELD_DESC } from '../models/Constants';
import { useAppSelector } from "../hooks/hooks";
import { isShowFlyoutAction, updateName } from '../store/actions';
import { useDispatch } from "react-redux";

const Panel = styled.div`
margin: 10px;
padding: 20px;
background: #eee;
box-shadow: 0 6px 20px 10px #ccc;
border-radius: 6px;
`;

const Form = styled.form`
`;

const Button = styled.button.attrs({ type: "button" })`
padding: 5px 10px;

`;

const Wrapper = styled.div`
text-align:right;
`;


const LeftPanel: React.FC = () => {
    const language = useAppSelector(state => state.language.language);

    const dispatch = useDispatch();

    const onShowFlyoutHandler = (field: string) => {
        dispatch(isShowFlyoutAction(true, field));
    }

    const onChangeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {console.log('fdddddddddddddddddddddddddddddddddddd');
        const val = event.target.value;
        dispatch(updateName(val, language));
    }

    return <Panel>
        <Form >
            <InputForm label={FIELD_NAME} placeholder={FIELD_NAME} length={20} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <InputForm label={FIELD_DESC} placeholder={FIELD_DESC} length={50} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <Wrapper><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default LeftPanel;