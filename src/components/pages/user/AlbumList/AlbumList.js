import './AlbumList.scss';
import { Link } from "react-router-dom";

function AlbumList ({album}) {
    const {id, title, baseImgUrl, photosLength} = album;

    return <div className="album">
        <Link to={`/album/${id}`}></Link>
        <img src={baseImgUrl} alt={title} />
        <div className="album__content">
            <div className="album__title">Album's name: {title}</div>
            <div className="album__photos">Number of photos: {photosLength}</div>
        </div>
    </div>
}

export default AlbumList;