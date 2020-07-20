import config from '../config'

const AuthApiService = {
    postLogin(creds) {
        return fetch(`${config.API_ENDPOINT}/auth/login`,
            {method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(creds)}
        )
            .then(res => 
                (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json()
            )
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'PSOT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => 
                (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json()
            )
    }
}

export default AuthApiService