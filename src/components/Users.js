import React from 'react';
import useResources from '../components/useResourcces';

const Users=()=> {
    const users =useResources('users')
    return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li> 
          ))}
        </ul>
      )
}
export default Users;