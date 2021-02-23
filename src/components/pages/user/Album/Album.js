import { useState } from 'react'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
// import { useEffect } from "react";
import Photo from 'components/pages/user/Photo/Photo'
import Modal from 'components/common/Modal/Modal'
import albums from 'app/reducers/albums/albums'

function Album () {
    const { id } = useParams();
    const albumsPhotos = useSelector(state => state.albums.albumsPhotos)[id];
    const [openModal, toggleOpenModal] = useState(false);
    const [currentId, editCurrentId] = useState(albumsPhotos[0].id);

    const openImgPopup = (id) => {
        toggleOpenModal(true);
        editCurrentId(id);
    }

    const changeSlideToNext = (next) => {
        if (next) {
            currentId === (albumsPhotos.length - 1) ? editCurrentId(0) : editCurrentId(currentId + 1);
        } else {
            currentId === 0 ? editCurrentId(albumsPhotos.length - 1) : editCurrentId(currentId - 1);
        }
    }

    return <div>
    {
        albumsPhotos.map((photo, index) => 
            <Photo
                key={photo.id}
                id={photo.id}
                title={photo.title}
                thumbnailUrl={photo.thumbnailUrl}
                onClick={() => openImgPopup(index)}
            />
        )
    }
    {
        openModal 
        ? 
            <Modal 
                img={albumsPhotos[currentId]} 
                closeModal={() => toggleOpenModal(false)} 
                nextSlide={() => changeSlideToNext(true)}
                prevSlide={() => changeSlideToNext(false)}
            /> 
        : 
        ''
    }
    </div>
}

export default Album;