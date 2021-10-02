import React from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';
import ComparedPost from './ComparedPost';

const Wrapper = styled.div<WrapperComparedPostProps>`
width:${props => props.width}px;
text-align:center;
margin: 1rem auto;
border-radius: 4px;
border: 1px solid #ccc;
`;

interface WrapperComparedPostProps {
    readonly width: number;
}

const WrapperComparedPost = styled.div`
display:flex;
flex-direction: row;
`;

const ComparedPosts = () => {

    const { comparedPosts } = useAppSelector(state => state.posts);

    const width = comparedPosts.length * 400;

    return (
        <Wrapper width={width}>
            <h3>Posts Comparation</h3>
            <WrapperComparedPost>
                {comparedPosts.length > 1 && comparedPosts.map(item => <ComparedPost key={item.id} post={item} />)}
            </WrapperComparedPost>
        </Wrapper>
    )
}

export default ComparedPosts;
