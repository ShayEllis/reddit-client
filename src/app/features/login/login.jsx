import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { redditAPI } from "../../api/reddit-api"
import { useSearchParams, redirect } from "react-router-dom"
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loginStatus, setLoginStatus] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('redditToken') && !searchParams.toString()) { // also need to account for "undefined" & make sure token is not expired
            const { mobileAuthURI, state, } = redditAPI.generateAuthorizationURI()
            localStorage.setItem('authState', state)
            window.location.href = mobileAuthURI
        } else if (searchParams.toString() && !localStorage.getItem('redditToken')) {
            const state = localStorage.getItem('authState')
            const responseResult = redditAPI.checkApiResponse(searchParams, state)
            if (typeof responseResult !== 'object') {
                redditAPI.requestAccessToken(responseResult).then((result) => {
                    console.log(result)
                    if(result) {
                        localStorage.setItem('redditToken', result.access_token)
                        localStorage.setItem('redditTokenExpiresIn', result.expires_in)
                        localStorage.setItem('redditRefreshToken', result.refresh_token)
                        navigate('/app')
                    }
                })
            } else {
                setLoginStatus(responseResult.errorInfo)
            }
        } else {
            navigate('/app')
        }
    }, [searchParams])

    const handleButtonClick = () => {
        navigate('/')
    }

    return (
        <section id='login-page'>
            <h2>Login</h2>
            {loginStatus ? <p>{loginStatus}</p> : ''}
            {loginStatus ? <button onClick={handleButtonClick}>Try Again</button> : ''}
        </section>
    )
}

export default Login