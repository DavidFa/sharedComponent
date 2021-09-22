import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputFormWithLanguage from "./InputFormWithLanguage";
import { LocalizationState } from "../models/Types";

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

    const languages = useSelector((state: LocalizationState) => state?.languages);

    let inputs = languages?.map((item: string, index: number) => {
        return <InputFormWithLanguage key={`${item}_${index}`} language={item.toUpperCase()} placeholder={item.toUpperCase()} length={20} />
    });

    return <Panel>
        <Form >
            <H4>Name</H4>
            {inputs}
            <Wrapper><Button>Cancel</Button><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default RightPanel;