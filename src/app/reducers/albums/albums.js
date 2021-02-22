import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAlbums = createAsyncThunk(
    'users/fetchAlbums',
    ({dispatch, id}) => {
        fetch(`https://jsonplaceholder.typicode.com/user/${id}/albums`)
        .then(response => response.json())
        .then(data => { 
            dispatch(fetchPhotos({albums: data, userId: id}));
        })
    }
)

const fetchPhotos = createAsyncThunk(
    'users/fetchPhotos',
    ({albums, userId}) => {
        return new Promise((resolve, reject) => {
            let requests = albums.map(album => fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`));
            
            Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(data => {
                let newAlbums = albums.map((album, index) => {
                    // в массив с информацией об альбоме доавляем массив фото, а также обложку для альбома
                    album.photos = data[index];
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
        albumsInfo: JSON.parse(localStorage.getItem("albumsInfo")) || {},
        albumsPhotos: JSON.parse(localStorage.getItem("albumsPhotos")) || {}
    },
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    },
    extraReducers: {
        [fetchPhotos.fulfilled]: (state, action) => {
            action.payload.albums.map((album) => {
                const {userId, id, baseImgUrl, photos, title} = album;
                let albumInfo = {
                    id: id,
                    baseImgUrl: baseImgUrl,
                    title: title,
                    photosLength: photos.length
                }
                if (state.albumsInfo[userId]) {
                    state.albumsInfo[userId].push(albumInfo);
                } else {
                    state.albumsInfo[userId] = [albumInfo];
                }
                state.albumsPhotos[id] = photos;
            })
            state.loading = false;

            localStorage.setItem('albumsInfo', JSON.stringify(state.albumsInfo))
            localStorage.setItem('albumsPhotos', JSON.stringify(state.albumsPhotos))
        },
    }
})

export const { toggleLoading } = albumsSlice.actions
export default albumsSlice.reducer

