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
    convertHTMLCodes(text) {
        if (text) {
            let convertedText = text
            const htmlCodeName = {quot: '"', amp: '&', apos: '\'', lt: '<', gt: '>', }
            const htmlCodesRegex =  /&(#(?:x[0-9a-f]+|\d+)+|[a-z]+);/gi
            do {
                convertedText = convertedText.replace(htmlCodesRegex, ($0, $1) => {
                    if ($1[0] === "#") {
                        if (/#x(200B|200C|200D|FEFF)/ig.test($1)) {
                            return ''
                        } else {
                            return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16) : parseInt($1.substr(1), 10))
                        }
                    } else {
                        return htmlCodeName.hasOwnProperty($1) ? htmlCodeName[$1] : $0
                    }
                })
            } while (htmlCodesRegex.test(convertedText))
            return convertedText
        }
    },
    adjustRedditPostTextHTML(text) {
        if (text) {
            return text.replace(/<!-- (SC_OFF|SC_ON) -->/gi, '').replace(/<p><\/p>|<p>(<.+?>)<\/p>/gi, '$1')
        }
    },
}

export default helpers

