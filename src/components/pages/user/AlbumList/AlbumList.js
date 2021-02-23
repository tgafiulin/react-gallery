import './AlbumList.scss';
import { Link } from "react-router-dom";

function AlbumList ({album}) {
    const {id, title, baseImgUrl, photosLength} = album;

    return <div className="album-list">
        <Link to={`/album/${id}`}></Link>
        <img src={baseImgUrl} alt={title} />
        <div className="album-list__content">
            <div className="album-list__title">Album's name: {title}</div>
            <div className="album-list__photos">Number of photos: {photosLength}</div>
        </div>
    </div>
}

export default AlbumList;