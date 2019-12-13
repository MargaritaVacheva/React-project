import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import recipeServices from '../../services/recipes-services';
import { UserContext } from '../App/App';

const DeleteRecipe = () => {
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    let { id } = useParams();

        recipeServices.delete(id)
        .then((res) => {
            console.log(res)  
            setUser(res); 
            history.push('/recipes');     
        })
        .catch(err => console.log(err));

    return null;
}

export default DeleteRecipe;
