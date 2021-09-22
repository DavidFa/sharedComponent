import React from "react";
import styled from "styled-components";
import { InputFormProps } from "../models/Types";


const Wrapper = styled.div`
    display: block;
    margin: 10px auto;
`;

const Label = styled.label`
display: inline-block;
width:100px;
margin: 5px 10px;
`;

const Button = styled.button.attrs({ type: "button" })`
padding: 5px 10px;
`;

const Input = styled.input`
padding: 5px 20px;
`;

const InputForm: React.FC<InputFormProps> = ({ label, placeholder, length, showFlyoutHandler, changeField }) => {

    return <Wrapper><Label>{label}:</Label><Input placeholder={placeholder} maxLength={length} onChange={(e) => changeField(e)} /><Button onClick={() => showFlyoutHandler(label)}>+</Button></Wrapper>
}

export default InputForm;