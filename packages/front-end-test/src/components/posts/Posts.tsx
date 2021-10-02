import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { PostStatus } from '../../models/Types';
import { fetchPosts, fetchPost, actions } from '../../store/postsReducer';
import Table from '../UI/table/Table';
import AddPost from './AddPost';
import ComparedPosts from './ComparedPosts';
import Post from './Post';

const Wrapper = styled.div`
text-align:center;
`;
const Button = styled.button`
width:100px;
padding: 3px 6px;
margin:20px auto;
background: #abc;
border-radius: 6px;
`;

const headers: string[] = ["id", 'title', 'action'];

const Posts: React.FC = () => {

    const { status, posts, comparedPosts } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === PostStatus.list)
            dispatch(fetchPosts(10));
    }, [dispatch, status])

    const rowClickHandler = useCallback(
        (postId: number) => {
            dispatch(fetchPost(postId));
        },
        [dispatch],
    )

    const onAddPostHandler = useCallback(
        () => {
            dispatch(actions.updateStatus(PostStatus.add));
        },
        [dispatch],
    )

    const onSelectedHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.target.checked;
            const value = event.target.value;
            const postId = parseInt(value);
            if (checked) {
                if (comparedPosts.length >= 3) {
                    alert("Please select no more than 3 posts");
                    event.target.checked = false;
                    return;
                }
                const post = posts.find(item => {
                    return item.id === postId
                });
                if (post)
                    dispatch(actions.addComparedPost(post));
            } else {
                dispatch(actions.removeComparedPost(postId));
            }
        },
        [dispatch, posts, comparedPosts],
    )

    const body = useMemo(() => {
        switch (status) {
            case PostStatus.list: {
                return (<div>
                    <Button onClick={onAddPostHandler}>Add Post</Button>
                    <Table headers={headers} data={posts} rowClickHandler={rowClickHandler} onSelectedHandler={onSelectedHandler} />
                </div>);
            }
            case PostStatus.edit: {
                return <Post />;
            }
            case PostStatus.add: {
                return <AddPost />;
            }
        }
    }, [status, posts, rowClickHandler, onAddPostHandler, onSelectedHandler]);

    const comparePosts = useMemo(() => {
        return comparedPosts?.length > 1 && <ComparedPosts />;
    }, [comparedPosts])

    return (
        <Wrapper>
            {comparePosts}
            {body}
        </Wrapper>
    )
}

export default Posts;
