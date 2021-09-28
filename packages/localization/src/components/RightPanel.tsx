import React from "react";
import styled from "styled-components";
import useRightPanel from "./hooks/useRightPanel";

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


    const { flyOutField, inputs, dissFlyoutHandler, onSubmit } = useRightPanel();

    // const inputs = useMemo(() => {
    //     languages?.map((item: string, index: number) => {
    //         const value = item === language ? field.tem : fieldSet[item] || '';
    //         return <InputFormWithLanguage key={`${item}_${index}`} language={item} placeholder={item} length={field.length} value={value} changeField={onChangeFieldHandler} />
    //     });
    // }, [flyOutField, name, description]);


    return <Panel>
        <Form>
            <H4 role="h4">{flyOutField}</H4>
            {inputs}
            <Wrapper>
                <Button data-testid="cancelBtn" onClick={dissFlyoutHandler}>Cancel</Button>
                <Button data-testid="saveBtn" onClick={onSubmit}>Save</Button>
            </Wrapper>
        </Form>
    </Panel>
}

export default RightPanel;