function Photo({id, title, thumbnailUrl, onClick}) {
    return <div className="photo" onClick={onClick}>
        <img src={thumbnailUrl} alt={title} />
    </div>
}

export default Photo;