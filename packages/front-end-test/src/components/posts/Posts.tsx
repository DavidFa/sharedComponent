import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { PostStatus } from '../../models/Types';
import { fetchPosts, fetchPost, actions } from '../../store/postsReducer';
import Table from '../UI/table/Table';
import AddPost from './AddPost';
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

const headers: string[] = ["id", 'title'];

const Posts: React.FC = () => {

    const { status, posts } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts(10));
    }, [dispatch])

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

    const body = useMemo(() => {
        switch (status) {
            case PostStatus.list: {
                return (<div>
                    <Button onClick={onAddPostHandler}>Add Post</Button>
                    <Table headers={headers} data={posts} rowClickHandler={rowClickHandler} />
                </div>);
            }
            case PostStatus.edit: {
                return <Post />;
            }
            case PostStatus.add: {
                return <AddPost />;
            }
        }
    }, [status, posts, rowClickHandler, onAddPostHandler]);

    return (
        <Wrapper>
            {body}
        </Wrapper>
    )
}

export default Posts;
