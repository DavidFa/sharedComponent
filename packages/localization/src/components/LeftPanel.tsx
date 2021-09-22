import React from "react";
import styled from "styled-components";
import { InputFormModel } from "../models/Types";
import InputForm from "./InputForm";

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

const InputFormData: InputFormModel = {
    name: { label: "Name", placeholder: "Name", length: 20 },
    description: { label: "Description", placeholder: "Description", length: 50 }
}

const LeftPanel: React.FC = () => {
    return <Panel>
        <Form >
            <InputForm {...InputFormData.name} />
            <InputForm {...InputFormData.description} />
            <Wrapper><Button>Save</Button></Wrapper>
        </Form>
    </Panel>
}

export default LeftPanel;