const helpers = {
    checkTokenExpiration () {
        const tokenExpirationDate = new Date(localStorage.getItem('redditTokenExpirationDate'))
        const dateNow = new Date()
        return tokenExpirationDate.getTime() < dateNow.getTime()
    }
}

export default helpers