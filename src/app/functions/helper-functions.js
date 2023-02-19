const helpers = {
    checkTokenExpiration () {
        const tokenExpirationDate = new Date(localStorage.getItem('redditTokenExpirationDate'))
        const dateNow = new Date()
        return tokenExpirationDate.getTime() < dateNow.getTime()
    },
    correctURL (url) {
        if (url) {
            return url.replace(/&amp;/ig, "&")
        }
    }
}

export default helpers