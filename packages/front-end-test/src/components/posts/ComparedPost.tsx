import React from 'react'
import styled from 'styled-components'
import { PostType } from '../../models/Types';

const Wrapper = styled.div`
margin: 1rem auto;
width:400px;
border-radius: 4px;
border: 1px solid #ccc;
display:flex;
flex-direction: column;
`;

const InputGroup = styled.div`
padding: 0.3rem;
display:inline-block;
`;

const Label = styled.label`
width:70px;
display:inline-block;
`;

const Input = styled.input`
width:300px;
`;

type ComparedPostProps = {
    post: PostType;
}

const ComparedPost: React.FC<ComparedPostProps> = ({ post }) => {
    return (
        <Wrapper>
            <InputGroup><Label>Title</Label><Input value={post.title} disabled={true} /></InputGroup>
            <InputGroup><Label>Body</Label><Input value={post.body} disabled={true} /></InputGroup>
        </Wrapper>
    )
}

export default ComparedPost;
