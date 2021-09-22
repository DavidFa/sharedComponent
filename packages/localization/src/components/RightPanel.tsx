import React from "react";
import styled from "styled-components";
import InputFormWithLanguage from "./InputFormWithLanguage";
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from 'react-redux';
import { dissFlyoutAction, updateFlyoutName } from '../store/actions';
import { FIELD_NAME, FIELD_DESC } from '../models/Constants';

const Panel = styled.div`
margin: 10px;
padding: 20px;
background: #fff;
box-shadow: 0 6px 20px 10px #ccc;
border-radius: 6px;
`;

const Form = styled.form`
`;

const Button = styled.button.attrs({ type: "button" })`
padding: 5px 10px;
margin: 0 10px;
`;

const H4 = styled.h4``;

const Wrapper = styled.div`
text-align:right;
margin: 20px 0 0 0;
`;


const RightPanel: React.FC = () => {

    const dispatch = useDispatch();
    const language = useAppSelector(state => state.language.language);
    const languages = useAppSelector(state => state.language.languages);
    const flyOutField = useAppSelector(state => state.localization.flyOutField);
    const localization = useAppSelector(state => state.localization);
    let field: {
        length: number;
        tem: string;
        localization: { [key: string]: string }
    } = {
        length: 20,
        tem: "",
        localization: {}
    };

    if (flyOutField === FIELD_NAME) {
        field = localization.name;
    } else if (flyOutField === FIELD_DESC) {
        field = localization.description;
    }
    // let fieldArr: { [key: string]: string } = {};
    // if (flyOutField === FIELD_NAME) {
    //     fieldArr = localization.name.localization;
    //     length = localization.name.length;
    // } else if (flyOutField === FIELD_DESC) {
    //     fieldArr = localization.description.localization;
    //     length = localization.description.length;
    // }

    const dissFlyoutHandler = () => {
        dispatch(dissFlyoutAction(language));
    }

    const onChangeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        switch (flyOutField) {
            case FIELD_NAME: {
                dispatch(updateFlyoutName(val));
                break;
            }
            case FIELD_DESC: {
                dispatch(updateFlyoutName(val));
                break;
            }
        }
    }

    let inputs = languages?.map((item: string, index: number) => {
        const value = item === language ? field.tem : field.localization[item] || '';
        return <InputFormWithLanguage key={`${item}_${index}`} language={item} placeholder={item} length={field.length} value={value} changeField={onChangeFieldHandler} />
    });

    return <Panel>
        <Form >
            <H4>{flyOutField}</H4>
            {inputs}
            <Wrapper><Button onClick={dissFlyoutHandler}>Cancel</Button><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default RightPanel;