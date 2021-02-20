import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        return {
            users: await response.json()
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: true,
        users: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload.users;
            state.loading = false;
        },
    }
})

export default usersSlice.reducer

