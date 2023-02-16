import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { redditAPI } from "../../api/reddit-api"
import helpers from "../../functions/helper-functions"
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loginStatus, setLoginStatus] = useState(null)

    useEffect(() => {
        const redditToken = localStorage.getItem('redditToken')
        const isExpired = helpers.checkTokenExpiration()
        if (!redditToken || redditToken === 'undefined' || isExpired) { // Make sure token is not expired
            if (!searchParams.toString()) {
                const { desktopAuthURI, state, } = redditAPI.generateAuthorizationURI()
                localStorage.setItem('authState', state)
                window.location.href = desktopAuthURI
            } else if (searchParams.toString()) {
                const state = localStorage.getItem('authState')
                const responseResult = redditAPI.checkApiResponse(searchParams, state)
                if (typeof responseResult !== 'object') {
                    redditAPI.requestAccessToken(responseResult).then((result) => {
                        if (result) {
                            const tokenExpiration = new Date()
                            tokenExpiration.setTime(tokenExpiration.getTime() + (result.expires_in * 1000))
                            localStorage.setItem('redditToken', result.access_token)
                            localStorage.setItem('redditTokenExpirationDate', tokenExpiration)
                            localStorage.setItem('redditRefreshToken', result.refresh_token)
                            navigate('/app')
                        }
                    })
                } else {
                    setLoginStatus(responseResult.errorInfo)
                }
            }
        }   else {
            navigate('/app')
        }
    }, [searchParams])

    const handleButtonClick = () => {
        navigate('/')
    }

    return (
        <section id='login-page'>
            <h2>Login</h2>
            {loginStatus && <p>{loginStatus}</p>}
            {loginStatus && <button onClick={handleButtonClick}>Try Again</button>}
        </section>
    )
}

export default Login