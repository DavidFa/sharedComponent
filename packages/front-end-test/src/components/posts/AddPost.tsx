import styled from 'styled-components';
import useAddPost from './hooks/useAddPost';

const Wrapper = styled.div`
margin: 1rem auto;
width:400px;
border-radius: 4px;
border: 1px solid #ccc;
`;

const Form = styled.form`
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

const Button = styled.button`
margin: 0 10px;
padding: 3px 10px;
`;

const AddPost = () => {
    const { post, onTitleChangeHandler, onBodyhangeHandler, onSubmitHandler, onCancelHandler } = useAddPost();

    return (
        <Wrapper id="addPostWrapper">
            <Form onSubmit={onSubmitHandler} role='form'>
                <InputGroup><h3>Add Post</h3></InputGroup>
                <InputGroup><Label>Title</Label><Input data-testid='input-title' type="text" value={post.title} onChange={onTitleChangeHandler} /></InputGroup>
                <InputGroup><Label>Body</Label><Input data-testid='input-body' type="text" value={post.body} onChange={onBodyhangeHandler} /></InputGroup>
                <InputGroup><Button type="button" onClick={onCancelHandler}>Cancel</Button><Button>Save</Button></InputGroup>
            </Form>
        </Wrapper>
    )
}

export default AddPost;
