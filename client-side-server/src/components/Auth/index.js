import React, { useContext, useEffect } from 'react';
import { AuthContext, UserContext } from '../App/App';
import services from '../../services/user-services'

const Auth = ({ children }) => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        services.auth()
            .then(res => {
                console.log(res, 'res from Auth');
                setAuthenticated(true);
                console.log(authenticated, ' - auth from Auth');
            })
            .catch(err =>{
                setAuthenticated(false);
                console.log(err, 'Err from Auth');
            })
    }, [user] );

    return <>{children}</>
}

export default Auth;