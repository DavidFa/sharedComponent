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

const Button = styled.button``;

const AddPost = () => {
    const { post, onTitleChangeHandler, onBodyhangeHandler, onSubmitHandler, onCancelHandler } = useAddPost();

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <InputGroup><h3>Edit Post</h3></InputGroup>
                <InputGroup><Label>Title</Label><Input value={post.title} onChange={onTitleChangeHandler} /></InputGroup>
                <InputGroup><Label>Body</Label><Input value={post.body} onChange={onBodyhangeHandler} /></InputGroup>
                <InputGroup><Button type="button" onClick={onCancelHandler}>Cancel</Button><Button>Save</Button></InputGroup>
            </Form>
        </Wrapper>
    )
}

export default AddPost;
