import React from 'react';
import Posts from './components/posts/Posts';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 2rem auto;
`;

const App = () => {
  return (
    <Wrapper>
      <Posts />
    </Wrapper>
  );
}

export default App;
