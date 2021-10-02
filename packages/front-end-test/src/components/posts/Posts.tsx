import React from 'react';
import styled from 'styled-components'
import usePosts from './hooks/usePosts';

const Wrapper = styled.div`
text-align:center;
`;


const Posts: React.FC = () => {
    const { body, comparePosts } = usePosts();


    return (
        <Wrapper>
            {comparePosts}
            {body}
        </Wrapper>
    )
}

export default Posts;
