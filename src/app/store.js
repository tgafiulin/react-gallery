import { configureStore } from '@reduxjs/toolkit';
import usersSlice from 'app/reducers/users'

export default configureStore({
  reducer: {
    users: usersSlice
  },
});
