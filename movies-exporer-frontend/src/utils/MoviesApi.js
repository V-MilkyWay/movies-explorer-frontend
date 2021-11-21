class Api {
    
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._contentType = options.headers['Content-Type']
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    //initial card from server
    initCardsFromServer() {
        return fetch(`${this._baseUrl}`)
            .then(res => this._getResponseData(res))
    }
}


const moviesApi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;