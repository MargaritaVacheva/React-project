import React, { useContext, useEffect } from 'react';
import { AuthContext, UserContext } from '../App/App';
import services from '../../services/user-services'

const Auth = ({ children }) => {
    const { auth, setAuth } = useContext(AuthContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        services.auth()
            .then(res => {
                console.log(res, 'res from Auth');
                setAuth(true);
                console.log(auth, ' - auth from Auth');
            })
            .catch(err =>{
                setAuth(false);
                console.log(err, 'Err from Auth');
            })
    }, [user] );

    return <>{children}</>
}

export default Auth;