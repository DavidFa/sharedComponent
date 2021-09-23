import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import InputFormWithLanguage from "./InputFormWithLanguage";
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from 'react-redux';
import { dissFlyoutAction, updateFlyoutName, updateNameSet, updateFlyoutDesc, updateDescSet } from '../store/actions';
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

    const [fieldSet, setFieldSet] = useState<{ [key: string]: string }>({});
    const dispatch = useDispatch();
    const language = useAppSelector(state => state.language.language);
    const languages = useAppSelector(state => state.language.languages);
    const flyOutField = useAppSelector(state => state.localization.flyOutField);
    const localization = useAppSelector(state => state.localization);

    const field = useMemo(() => {
        return flyOutField === FIELD_NAME ? localization.name : localization.description;
    }, [flyOutField, localization]);
    // let field: {
    //     length: number;
    //     tem: string;
    //     localization: { [key: string]: string }
    // } = {
    //     length: 20,
    //     tem: "",
    //     localization: {}
    // };

    // if (flyOutField === FIELD_NAME) {
    //     field = localization.name;
    // } else if (flyOutField === FIELD_DESC) {
    //     field = localization.description;
    // }

    useEffect(() => {
        const temp: { [key: string]: string } = {};
        for (let i in languages) {
            if (language !== languages[i]) {
                temp[languages[i]] = field.localization[languages[i]] || "";
            }
        }
        setFieldSet(temp);
    }, []);


    const dissFlyoutHandler = () => {
        dispatch(dissFlyoutAction(language));
    }

    const onChangeFieldHandler = (lang: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if (lang === language) {

            switch (flyOutField) {
                case FIELD_NAME: {
                    dispatch(updateFlyoutName(val));
                    break;
                }
                case FIELD_DESC: {
                    dispatch(updateFlyoutDesc(val));
                    break;
                }
            }
        } else {
            const newFieldSet = { ...fieldSet };
            newFieldSet[lang] = val;
            setFieldSet(newFieldSet);
        }

    }

    const onSubmit = () => {
        switch (flyOutField) {
            case FIELD_NAME: {
                dispatch(updateNameSet(fieldSet, language));
                break;
            }
            case FIELD_DESC: {
                dispatch(updateDescSet(fieldSet, language));
                break;
            }
        }
    }

    let inputs = languages?.map((item: string, index: number) => {
        const value = item === language ? field.tem : fieldSet[item] || '';
        return <InputFormWithLanguage key={`${item}_${index}`} language={item} placeholder={item} length={field.length} value={value} changeField={onChangeFieldHandler} />
    });

    return <Panel>
        <Form>
            <H4>{flyOutField}</H4>
            {inputs}
            <Wrapper><Button onClick={dissFlyoutHandler}>Cancel</Button><Button onClick={onSubmit}>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default RightPanel;