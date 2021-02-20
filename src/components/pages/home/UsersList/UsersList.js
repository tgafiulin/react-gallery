import './UsersList.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'app/reducers/users/users';
import Loader from 'components/common/Loader/Loader'
import UserItem from 'components/pages/home/UserItem/UserItem'

function UsersList () {
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.users);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers());
        }
    }, [])

    return <>
    {
        loading 
        ?
            <Loader /> 
        :
            <div className="users-list-container">
                <div className="users-list">
                    {
                        users.map((user) => <UserItem key={user.id} user={user}></UserItem>)
                    }
                </div>
            </div>
    }
    </>;
}

export default UsersList;