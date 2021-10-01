import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostStatus, PostType } from "../models/Types";;

interface StateType {
    status: PostStatus;
    posts: PostType[];
    post: PostType | null;
}

interface MyKnownError {
    errorMessage: string
}

const initialState: StateType = {
    status: PostStatus.list,
    posts: [],
    post: null
};

export const fetchPosts = createAsyncThunk<PostType, number>('posts/getPosts',
    async (limit: number, { rejectWithValue }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            // Return the known error for future handling
            return rejectWithValue({ errorMessage: "error" } as MyKnownError)
        }
        return (await response.json()) as PostType;
    })

export const fetchPost = createAsyncThunk<PostType, number>('posts/getPost',
    async (postId: number, { dispatch, rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            // Return the known error for future handling
            return rejectWithValue({ errorMessage: "error" } as MyKnownError)
        }
        const data = (await response.json()) as PostType;
        dispatch(actions.updateStatus(PostStatus.edit));
        return data;
    })

export const editPost = createAsyncThunk<PostType, PostType>('posts/editPost',
    async (post: PostType, { dispatch, rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { method: "PUT", body: JSON.stringify(post) });
        if (!response.ok) {
            // Return the known error for future handling
            return rejectWithValue({ errorMessage: "error" } as MyKnownError)
        }
        const data = (await response.json()) as PostType;
        dispatch(fetchPosts(10));
        dispatch(actions.updateStatus(PostStatus.list));
        return data;
    })

export const addPost = createAsyncThunk<PostType, { title: string, body: string }>('posts/addPost',
    async (post: { title: string, body: string }, { dispatch, rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: "POST", body: JSON.stringify(post) });
        if (!response.ok) {
            // Return the known error for future handling
            return rejectWithValue({ errorMessage: "error" } as MyKnownError)
        }
        const data = (await response.json()) as PostType;
        dispatch(fetchPosts(10));
        dispatch(actions.updateStatus(PostStatus.list));
        return data;
    })

const postSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {
        updateStatus: (state, { payload }) => {
            state.status = payload;
        },
        editTitle: (state, { payload }) => {
            if (!state.post) return state;
            state.post.title = payload;
        },
        editBody: (state, { payload }) => {
            if (!state.post) return state;
            state.post.body = payload;
        }
    },

    extraReducers: {
        [fetchPosts.pending.type]: (state, action) => {

        },
        [fetchPosts.fulfilled.type]: (state, { payload }) => {
            state.posts = payload
        },
        [fetchPosts.rejected.type]: (state, { payload }) => {
        },
        [fetchPost.pending.type]: (state, action) => {

        },
        [fetchPost.fulfilled.type]: (state, { payload }) => {
            state.post = payload
        },
        [fetchPost.rejected.type]: (state, { payload }) => {
        },
        [editPost.pending.type]: (state, action) => {

        },
        [editPost.fulfilled.type]: (state, { payload }) => {
            state.post = null
        },
        [editPost.rejected.type]: (state, { payload }) => {
        },
        [addPost.pending.type]: (state, action) => {

        },
        [addPost.fulfilled.type]: (state, { payload }) => {
            console.log("fulfilled", payload)
        },
        [addPost.rejected.type]: (state, { payload }) => {
            console.log("rejected", payload)
        },
    }
});

export const actions = postSlice.actions;
export default postSlice.reducer;