import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAlbums = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then(response => response.json())
        .then(data => { 
            dispatch(fetchPhotos({albums: data, userId: id}));
        })
    }
}

const fetchPhotos = createAsyncThunk(
    'users/fetchPhotos',
    ({albums, userId}) => {
        return new Promise((resolve, reject) => {
            let requests = albums.map(album => fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`));
            
            Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(data => {
                let newAlbums = albums.map((album) => {
                    album.photos = data[album.id - 1];
                    album.baseImgUrl = album.photos[0].thumbnailUrl;
                    return album;
                })
                resolve({
                    userId: userId,
                    albums: newAlbums
                });
            })
        });
    }
)

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        loading: true,
        albums: {}
    },
    extraReducers: {
        [fetchPhotos.fulfilled]: (state, action) => {
            state.albums[action.payload.userId] = action.payload.albums;
            state.loading = false;
        },
    }
})

export const { updateAlbums } = albumsSlice.actions
export default albumsSlice.reducer

