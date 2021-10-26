import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { mockUsers } from '../thunks/userThunk';

export const userAdapter = createEntityAdapter();
export const userSelectors = userAdapter.getSelectors(state => state.users);

const userSlice = createSlice({
    name: "users",
    initialState: userAdapter.getInitialState({
        loading: 'idle',
        error: null,
        editUserId: null
    }),
    reducers: {
        setEditUserId: (state, { payload }) => {
            state.editUserId = payload;
        }
    },
    extraReducers: {
        [mockUsers.pending]: (state, { payload }) => {
            state.loading = "pending"
            state.error = null;
        },
        [mockUsers.fulfilled]: (state, { payload }) => {
            if (state.loading === "pending") {
                userAdapter.setAll(state, payload);
                state.loading = "idle"
                state.error = null
            }
        },
        [mockUsers.rejected]: (state, { payload }) => {
            if (state.loading === "pending") {
                state.loading = "idle"
                state.error = payload.error
            }
        }
    }
})

export const actions = userSlice.actions;
export default userSlice.reducer;