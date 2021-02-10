import React from 'react';
import './UserList.css';


const UserList = ({users}) => {
   
   return (
       <div class="block">
        {users.map((user, index) => (
            <div key={index}>
                <h1 className="user">{user.first_name}</h1>
            </div>
           
        ))}
       </div>
   )
    
}

export default UserList; 
