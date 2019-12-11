import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import services from '../../services/user-services';
import { UserContext } from '../App/App';

const Logout = () => {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    services.logout()
    .then(() => {
        setUser(null);
        history.push("/");
    })
    .catch(err => console.log(err))

    return null;
}

export default Logout;
