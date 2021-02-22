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
        users: JSON.parse(localStorage.getItem("userstate")) || []
    },
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload.users;
            state.loading = false;
            localStorage.setItem('userstate', JSON.stringify(state.users))
        },
    }
})

export const { toggleLoading } = usersSlice.actions
export default usersSlice.reducer

