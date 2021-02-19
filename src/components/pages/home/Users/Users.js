import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'app/reducers/users';
import Loader from 'components/common/Loader/Loader'

function Users () {
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return <>
    {
        loading 
        ?
            <Loader /> 
        :
            <table>
                <thead>
                    <tr><th>id</th><th>name</th><th>email</th></tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td></tr>)
                    }
                </tbody>
            </table>
    }
    </>;
}

export default Users;