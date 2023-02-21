const helpers = {
    checkTokenExpiration () {
        const tokenExpirationDate = new Date(localStorage.getItem('redditTokenExpirationDate'))
        const dateNow = new Date()
        return tokenExpirationDate.getTime() < dateNow.getTime()
    },
    correctURL (url) {
        if (url) {
            return url.replace(/&amp;/ig, "&").replace(/&lt;/ig, '<').replace(/&gt;/ig, '>')
        }
    }
}

export default helpers