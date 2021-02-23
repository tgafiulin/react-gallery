import './Modal.scss'
import Button from 'components/common/Button/Button'
import { useEffect } from 'react'

function Modal ({img, closeModal, nextSlide, prevSlide}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    })

    return <div className="popup-container">
        <div className="popup-container__close" onClick={closeModal}></div>
        <div className="popup-container__arrow popup-container__arrow--prev" onClick={prevSlide}></div>
        <div className="popup">
            <div className="popup__close">
                <Button onClick={closeModal} className="remove-btn"/>
            </div>
            <div className="popup__content">
                <img src={img.url} alt={img.title}/>
            </div>
        </div>
        <div className="popup-container__arrow popup-container__arrow--next" onClick={nextSlide}></div>
    </div>
}

export default Modal;