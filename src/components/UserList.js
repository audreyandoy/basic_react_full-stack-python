import React from 'react';
import './UserList.css';


const UserList = ({user}) => {
   
    console.log(user)
   return (
       <div className="block">
           
        <h1>{user} is logged in! </h1>
     
       </div>
   )
    
}

export default UserList; 
