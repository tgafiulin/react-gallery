import './UserItem.scss'
import { Link } from "react-router-dom";

function UserItem ({user}) {
    const {id, name, email} = user;

    return <div className="user-item">
        <Link to={`user/${id}`}></Link>
        <div className="user-item__id">{id}</div>
        <div className="user-item__name">{name}</div>
        <div className="user-item__email">{email}</div>
    </div>
}

export default UserItem;