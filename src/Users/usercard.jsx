import User from './user';
import React, { useEffect, useState } from 'react';;

function Usercard() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        const fetchUsers = async ()=> {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'GET',
                });
                const responseData = await response.json();
                console.log(responseData);
                setUsers(responseData);
            } catch (error) {
                console.log(error.message)
                window.alert(error.message)
            }
        };
        fetchUsers();
    }, []);

  return (
    <div className='user-card-container'>

      {users.map((myUser) => (
        <User key={myUser.id} myUser={myUser} />
      ))}
    </div>
  )
}

export default Usercard;
