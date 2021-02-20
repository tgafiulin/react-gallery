import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from 'app/reducers/albums/albums'
import Loader from 'components/common/Loader/Loader'
import Album from 'components/pages/user/Album/Album'

function User () {
    const dispatch = useDispatch();
    const {loading, albums} = useSelector(state => state.albums);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchAlbums(id));
    }, [])

    return <>
        {loading 
        ?
            <Loader /> 
        :
            <div className="albums-list">
                {
                    albums[id].map((album) => <Album key={album.id} album={album} />)
                }
            </div>
        }   
    </>;
}

export default User;