import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostStatus, PostType } from "../models/Types";;

interface StateType {
    status: PostStatus;
    posts: PostType[];
    post: PostType;
    comparedPosts: PostType[];
}

interface MyKnownError {
    errorMessage: string
}

const initialState: StateType = {
    status: PostStatus.list,
    posts: [],
    post: { id: 0, title: "", body: "" },
    comparedPosts: []
};

export const fetchPosts = createAsyncThunk<PostType, number>('posts/getPosts',
    async (limit: number, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
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
        dispatch(actions.updateStatus(PostStatus.list));
        return data;
    })

const postSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {
        updateStatus: (state: StateType, action: PayloadAction<PostStatus>) => {
            state.status = action.payload;
        },
        editTitle: (state: StateType, action: PayloadAction<string>) => {
            if (!state.post || !action.payload) return state;
            state.post.title = action.payload;
        },
        editBody: (state: StateType, action: PayloadAction<string>) => {
            if (!state.post || !action.payload) return state;
            state.post.body = action.payload;
        },
        addComparedPost: (state: StateType, action: PayloadAction<PostType>) => {
            if (!action.payload) return state;
            state.comparedPosts.push(action.payload);
        },
        removeComparedPost: (state: StateType, action: PayloadAction<number>) => {
            if (!state.comparedPosts.length || !action.payload) return;
            state.comparedPosts = state.comparedPosts.filter(item => item.id !== action.payload);
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
            state.post = { id: 0, title: "", body: "" }
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