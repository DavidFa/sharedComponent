import { createAsyncThunk } from '@reduxjs/toolkit';

export const users = [
    { id: 1, name: 'user 1', age: 1 },
    { id: 2, name: 'user 2', age: 2 },
    { id: 3, name: 'user 3', age: 3 },
    { id: 4, name: 'user 1', age: 1 },
    { id: 5, name: 'user 2', age: 2 },
    { id: 6, name: 'user 3', age: 3 },
    { id: 7, name: 'user 1', age: 1 },
    { id: 8, name: 'user 2', age: 2 },
    { id: 9, name: 'user 3', age: 3 },
    { id: 10, name: 'user 1', age: 1 },
    { id: 11, name: 'user 2', age: 2 },
    { id: 12, name: 'user 3', age: 3 }
]

export const getPromiseUsers = (isSuccess = true) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (isSuccess) {
                resolve({
                    ok: true,
                    json: async () => users
                });
            } else {
                reject({ error: "Something wrong" })
            }
        }, 100)

    })
}

export const mockUsers = createAsyncThunk('/users', async (limit = 1, { rejectWithValue }) => {
    try {
        const response = await getPromiseUsers();
        if (!response.ok) {
            return rejectWithValue({ error: "Something wrong!" });
        }
        const users = await response.json();
        const usersWithLimit = users.slice(0, limit);
        return usersWithLimit;
    } catch (e) {
        return rejectWithValue({ error: e.error });
    }

})