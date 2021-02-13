import React from 'react';
import './UserList.css';

const UserList = ({user}) => {
   
    console.log(user)
   return (
       
       <div className="block">
           
        <b>Hello, {user}</b>
       </div>
   )
    
}

export default UserList; 
