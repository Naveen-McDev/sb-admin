import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import UserContext from './UserContext';

function UserView() {

    const params = useParams();

    const userData = useContext(UserContext);

  return (
    <div>UserView 
    <h2>{userData.users[params.id].name} </h2>
    </div>
    
  )
}

export default UserView;