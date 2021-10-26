import Table from '../ui/Table';
import useUsers from './hooks/useUsers';

const Users = () => {

    const { userList, editHandler } = useUsers();

    return (
        <div>
            {userList.length > 1 && <Table data-testid="userTable" users={userList} editHandler={editHandler} />}
        </div>
    )
}

export default Users;
