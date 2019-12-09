import React, { useEffect, useContext } from 'react';
import { UserContext } from '../App/App';
import services from '../../services/user-services';

const ProfilePage = ( ) => {
    const { user } = useContext(UserContext);
    
    // console.log(user);

    return ( 
    <pre>{JSON.stringify(user, null, 2)}</pre>
     );
}
 
export default ProfilePage;