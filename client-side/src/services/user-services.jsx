
const userUrl = 'http://localhost:9999/api/user'
const hostUrl = 'http://localhost:9999/api'


const userServices = {
    register: (data) => {
        return fetch(`${userUrl}/register`, {
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
    login: (data) => {
        return fetch(`${userUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        })
    },
    logout: () => {
        return fetch(`${userUrl}/logout`, {
          method: 'POST',
          credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.text() : res.text().then(text => Promise.reject(text))
        })
    },
    put: (id, data) => {
        return fetch(`${userUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.status === 200 ?
                    res.json() : Promise.reject(res.status)
        })
    },
    load: (id) => {
        return fetch(`${userUrl}/${id ? id : ''}`)
        .then(res => res.json());
    },
    auth: () => {
        return fetch(`${hostUrl}/auth`, {
            credentials: 'include'
        })
        .then(res => {
            return  res.status === 200 ?
                res.json()
               : res.text().then(text => Promise.reject(text))
        });
    }
}

export default userServices;
