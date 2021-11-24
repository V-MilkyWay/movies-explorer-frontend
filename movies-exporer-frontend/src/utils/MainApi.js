class Api {

    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._authorization = options.headers.authorization;
        this._contentType = options.headers['Content-Type']
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    //initial users
    initialUsers() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => this._getResponseData(res))
    }
    //initial card from server
    initCardsFromServer() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => this._getResponseData(res))
    }
    //loading info about user on server
    loadingUserInfoOnServer({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: this._authorization,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                name,
                email
            })
        }).then(res => this._getResponseData(res))
    }
    //loading new cards on server 
    loadingNewCardOnServer({
        movieId,
        nameRU,
        nameEN,
        director,
        thumbnail,
        country,
        year,
        duration,
        description,
        trailer,
        image }) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                authorization: this._authorization,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                movieId,
                nameRU,
                nameEN,
                director,
                thumbnail,
                country,
                year,
                duration,
                description,
                trailer,
                image
            })
        })
            .then(res => this._getResponseData(res));
    }
    //delete cards from server
    deleteCardFromServer(cardId) {
        return fetch(`${this._baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                authorization: this._authorization,
            }
        })
            .then(res => this._getResponseData(res))
    }
}


const api = new Api({
    baseUrl: 'https://api.diploma.nomoredomains.club',
    //'http://localhost:3001', 
    //'https://api.diploma.nomoredomains.club',
    //'https://api.your.mesto.nomoredomains.monster',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api