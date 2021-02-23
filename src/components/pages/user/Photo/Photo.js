function Photo({id, title, thumbnailUrl, onClick}) {
    return <div className="photo" onClick={onClick}>
        <img src={thumbnailUrl} alt={title} width="120" height="123" />
    </div>
}

export default Photo;