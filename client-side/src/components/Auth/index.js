import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App/App';
import services from '../../services/user-services'

const Auth = ({ children }) => {
    const { setUser } = useContext(UserContext);
    
    useEffect(() => {
        services.auth()
            .then(res => {
                console.log(res, 'res from Auth');
                setUser(res);
            })
            .catch(err => {
                setUser(null);
                console.log(err, 'Err from Auth');
            });
    }, [])

    return <>{children}</>
}

export default Auth;