const recipeUrl = 'http://localhost:9999/api/recipe';

const recipeServices = {
    post: (data) => {
        return fetch(`${recipeUrl}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        });
    },
    put: (id, data) => {
        return fetch(`${recipeUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        });
    },
    delete: (id) => {
        return fetch(`${recipeUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        });
    },
    load: (id) => {
        return fetch(`${recipeUrl}/${id ? id : ''}`)
        .then(res => {
            return res.status === 200 ?
                    res.json() : res.text().then(text => Promise.reject(text))
        })
        
    },
}

export default recipeServices;
