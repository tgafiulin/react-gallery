import { configureStore } from '@reduxjs/toolkit';
import usersSlice from 'app/reducers/users/users'
import albumsSlice from 'app/reducers/albums/albums'

export default configureStore({
  reducer: {
    users: usersSlice,
    albums: albumsSlice
  },
});
