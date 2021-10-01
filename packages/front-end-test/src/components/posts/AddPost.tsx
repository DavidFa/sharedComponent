import React, { useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/hooks';
import { addPost } from '../../store/postsReducer';

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

    const [post, setPost] = useState<{ title: string, body: string }>({ title: "", body: "" });
    const dispatch = useAppDispatch();

    const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPost = { ...post };
        newPost.title = event.target.value;
        setPost(newPost);
    }

    const onBodyhangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPost = { ...post };
        newPost.body = event.target.value;
        setPost(newPost);
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (post) {
            if (!post.title.trim()) {
                alert("Title is empty!");
            } else {
                dispatch(addPost(post));
            }

        }
    }

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <InputGroup><h3>Edit Post</h3></InputGroup>
                <InputGroup><Label>Title</Label><Input value={post.title} onChange={onTitleChangeHandler} /></InputGroup>
                <InputGroup><Label>Body</Label><Input value={post.body} onChange={onBodyhangeHandler} /></InputGroup>
                <InputGroup><Button>Save</Button></InputGroup>
            </Form>
        </Wrapper>
    )
}

export default AddPost;
