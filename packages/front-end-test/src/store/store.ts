import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsReducer';

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;