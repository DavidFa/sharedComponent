import Posts from './components/posts/Posts';
import styled from 'styled-components';
import FetchTest from './components/test/FetchTest';

const Wrapper = styled.div`
margin: 2rem auto;
`;

const App = () => {
  return (
    <Wrapper>
      <FetchTest postId={1} />
      <Posts />
    </Wrapper>
  );
}

export default App;
