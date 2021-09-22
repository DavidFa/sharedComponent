import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { FIELD_NAME, FIELD_DESC } from '../models/Constants';
import { useAppSelector } from "../hooks/hooks";
import { showFlyoutAction, updateName, updateDesc } from '../store/actions';
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

    const localization = useAppSelector(state => state.localization);

    const dispatch = useDispatch();

    const onShowFlyoutHandler = (field: string) => {
        dispatch(showFlyoutAction(field));
    }

    const onChangeFieldHandler = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {

        const val = event.target.value;
        switch (field) {
            case FIELD_NAME: {
                dispatch(updateName(val, language));
                break;
            }
            case FIELD_DESC: {
                dispatch(updateDesc(val, language));
                break;
            }
        }
    }

    return <Panel>
        <Form >
            <InputForm label={FIELD_NAME} placeholder={FIELD_NAME} length={20} value={localization.name.tem} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <InputForm label={FIELD_DESC} placeholder={FIELD_DESC} length={50} value={localization.description.tem} showFlyoutHandler={onShowFlyoutHandler} changeField={onChangeFieldHandler} />
            <Wrapper><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default LeftPanel;