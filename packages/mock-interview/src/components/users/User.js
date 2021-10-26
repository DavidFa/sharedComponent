import React from 'react'

const User = ({ id, name, age }) => {
    return (
        <li>
            <span>{id}</span>
            <span>{name}</span>
            <span>{age}</span>
        </li>
    )
}

export default User;
