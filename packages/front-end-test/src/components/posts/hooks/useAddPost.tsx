import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/hooks';
import { PostStatus } from '../../../models/Types';
import { actions, addPost } from '../../../store/postsReducer';

type field = "title" | "body";

const useAddPost = () => {
    const [post, setPost] = useState<{ title: string, body: string }>({ title: "", body: "" });
    const dispatch = useAppDispatch();

    const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPost = { ...post };
        newPost.title = event.target.value;
        newPost[event.target.name as field] = event.target.value;
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

    const onCancelHandler = () => {
        dispatch(actions.updateStatus(PostStatus.list));
    }

    return { post, onTitleChangeHandler, onBodyhangeHandler, onSubmitHandler, onCancelHandler }
}

export default useAddPost;
