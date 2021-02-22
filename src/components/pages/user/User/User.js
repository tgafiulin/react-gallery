import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums, toggleLoading } from 'app/reducers/albums/albums'
import Loader from 'components/common/Loader/Loader'
import AlbumList from 'components/pages/user/AlbumList/AlbumList'

function User () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const albumsInfo = useSelector(state => state.albums.albumsInfo)[id];
    const loading = useSelector(state => state.albums.loading);

    useEffect(() => {
        dispatch(fetchAlbums({
            dispatch: dispatch,
            id: id
        }));

        return () => dispatch(toggleLoading());
    }, [])

    return <>
        {loading 
        ?
            <Loader /> 
        :
            <div className="albums-list">
                {
                    albumsInfo.map((album) => <AlbumList key={album.id} album={album} />)
                }
            </div>
        }   
    </>;
}

export default User;