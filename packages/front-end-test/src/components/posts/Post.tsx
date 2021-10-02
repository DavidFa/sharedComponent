import React from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { PostStatus } from '../../models/Types';
import { actions, editPost } from '../../store/postsReducer';

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

const Post = () => {

    const { post } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.editTitle(event.target.value));
    }

    const onBodyhangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.editBody(event.target.value));
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (post) {
            if (!post.title.trim()) {
                alert("Title is empty!");
            } else {
                dispatch(editPost(post));
            }

        }
    }

    const onCancelHandler = () => {
        dispatch(actions.updateStatus(PostStatus.list));
    }

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

export default Post;
