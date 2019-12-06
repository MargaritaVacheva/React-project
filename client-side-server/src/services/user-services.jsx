
const hostUrl = 'http://localhost:9999/api/user';

const userServices = {
    register: (data) => {
        return fetch(`${hostUrl}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
    },
    login: (data) => {
        return fetch(`${hostUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        })
    },
    logout: () => {
        return fetch(`${hostUrl}/logout`, {
          method: 'POST',
          credentials: 'include'
        }).then(res => res.text());
    },
    load: (id) => {
        return fetch(`${hostUrl}/${id ? id : ''}`)
        .then(res => res.json());
    }
}

// function statusHandler(response) {
//     if (response.status >= 400) {
//         console.log(response.message)
//         throw new Error(response);
//     }
//     return response.json();
// }

// function errorHandler(error) {
//     console.error(error);
// }

export default userServices;
