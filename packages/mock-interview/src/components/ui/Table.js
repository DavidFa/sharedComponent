import React from 'react'

const Table = React.memo(({ users, editHandler }) => {

    return (
        <div>
            <table>
                <tbody>
                    {users && users.map(user => {
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td><button onClick={() => editHandler(user.id)}>Edit</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
});

export default Table;
