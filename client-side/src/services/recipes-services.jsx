
const recipeUrl = 'http://localhost:9999/api/recipe';
// const hostUrl = 'http://localhost:9999/api'


const recipeServices = {
    post: (data) => {
        console.log(data);
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
    load: (id) => {
        return fetch(`${recipeUrl}/${id ? id : ''}`)
        .then(res => {
            return res.status === 200 ?
                    res.json() : res.text().then(text => Promise.reject(text))
        })
        
    },
}

export default recipeServices;
