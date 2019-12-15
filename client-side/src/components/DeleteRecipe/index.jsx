import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import recipeServices from '../../services/recipes-services';
import { UserContext } from '../App/App';

const DeleteRecipe = ({ title, id, from, setAskingDelete, askingDelete }) => {
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const handleDelete = () => {
        recipeServices.delete(id)
            .then((res) => {
                console.log(res)
                setUser(res);
                document.location.href = from.pathname;
            })
            .catch(err => console.log(err));
    }

    const handleCancel = () => {
        setAskingDelete(false);
    }

    return (
        
        askingDelete ?
        <section className="delete-section">
            <span>Delete {title}?</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleCancel}>Cancel</button>
        </section>
        : ''
    );
}

export default DeleteRecipe;
