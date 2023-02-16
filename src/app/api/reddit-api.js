import { nanoid } from "nanoid"

const clientID = 'NwU4MAp6UlxU0M61jZvUow'
const clientSecret = '2tfRMh1Hk7tDLL-GsxzroSXbNpBkZQ'
const redirectURI = 'http://localhost:5173'

const redditAPI = {
    generateAuthorizationURI() {
        // Step 1 - Generate authorization URI
        // generate a random code to identify the authorization request
        const state = nanoid()
        // A comma-separated list of scope strings - possible values: identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread
        const scope = 'identity,read,edit' 
        // Redirect the user to this URL to get authorization for app to access account info
        const desktopAuthURI = `https://www.reddit.com/api/v1/authorize?client_id=${clientID}&response_type=code&state=${state}&redirect_uri=${redirectURI}&duration=permanent&scope=${scope}`
        const mobileAuthURI = `https://www.reddit.com//api/v1/authorize.compact?client_id=${clientID}&response_type=code&state=${state}&redirect_uri=${redirectURI}&duration=permanent&scope=${scope}`
        return { desktopAuthURI, mobileAuthURI, state }
    },
    checkApiResponse (urlParams, initialState) {
        // Step 2 - Check the query parameters returned from the authorization page
        const responseState = urlParams.get('state')
        const tokenRequestCode = urlParams.get('code')
        const error = urlParams.get('error')
        // 1. check if there was an error returned
        if (error) {
            switch(error) {
                case 'access_denied': { 
                    return { errorInfo: `An error was received: ${error} - app permission denied` }
                }
                case 'unsupported_response_type': {
                    return { errorInfo: `An error was received: ${error} - Invalid response_type parameter in initial authorization` }
                }
                case 'invalid_scope': {
                    return { errorInfo: `An error was received: ${error} - Invalid scope parameter in initial authorization` }
                }
                case 'invalid_request': {
                    return { errorInfo: `An error was received: ${error} - There was an issue with the request sent to /api/v1/authorize` }
                }
                default: {
                    return { errorInfo: `An error was received: ${error}` }
                }
            }
        }
        // 2. Make sure the state returned from the authorization page matches the one in the generated URI
        if (initialState === responseState) {
            return tokenRequestCode
        } else {
            return { errorInfo: 'The state received does not match the state sent in the original request' }
        }
    },
    async requestAccessToken (code) {
        // Step 3 - Make POST request with the authorization code to retrieve the access token
        const base64Auth = btoa(`${clientID}:${clientSecret}`)
        const header = {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${base64Auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectURI}`
        }
        try {
            const response = await fetch('http://localhost:5173/api/request', header) //Needed to use a proxy to avoid CORS error, request could not be sent from localhost root
            if (!response.ok) {
                throw new Error(`Failed to fetch access token: ${response.status} - ${response.statusText}`)
            }
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    },
}

export { redditAPI }