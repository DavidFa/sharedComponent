import React from "react";
import styled from "styled-components";
import { InputFormWithLanguageProps } from "../models/Types";


const Wrapper = styled.div`
    display: block;
    margin: 10px auto;
`;

const Label = styled.label`
display: inline-block;
width:100px;
margin: 5px 10px;
text-align:right;
`;

const Input = styled.input`
padding: 5px 20px;
`;

const InputFormWithLanguage: React.FC<InputFormWithLanguageProps> = ({ language, placeholder, length }) => {
    return <Wrapper><Input placeholder={placeholder} maxLength={length} /><Label>{language}</Label></Wrapper>
}

export default InputFormWithLanguage;