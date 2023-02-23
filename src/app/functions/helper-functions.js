const helpers = {
    checkTokenExpiration() {
        const tokenExpirationDate = new Date(localStorage.getItem('redditTokenExpirationDate'))
        const dateNow = new Date()
        return tokenExpirationDate.getTime() < dateNow.getTime()
    },
    adjustURL(url, youtube = false) {
        let correctedURL = url
        if (url) {
            correctedURL =  correctedURL.replace(/&amp;/ig, "&").replace(/&lt;/ig, '<').replace(/&gt;/ig, '>')
            if (youtube) {
                correctedURL = correctedURL.replace(/https:\/\/www.youtube.com\/embed/ig, 'https://www.youtube-nocookie.com/embed').replace(/web-share/ig, '')
            }
        }
        return correctedURL
    },
}

export default helpers