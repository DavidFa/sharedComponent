import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { PostStatus } from '../../../models/Types';
import { actions, editPost } from '../../../store/postsReducer';

const usePost = () => {
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

    return { post, dispatch, onTitleChangeHandler, onBodyhangeHandler, onSubmitHandler, onCancelHandler };
}

export default usePost;
