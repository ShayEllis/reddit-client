import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { redditAPI } from "../../api/reddit-api"
import { useSearchParams, redirect } from "react-router-dom"
import './login.css'

const loginLoader = () => {
    if (localStorage.getItem('redditToken')) {
        return redirect('/app')
    }
    return ''
}

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loginStatus, setLoginStatus] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('redditToken') && !searchParams.toString()) { // also need to account for "undefined"
            const { mobileAuthURI, state, } = redditAPI.generateAuthorizationURI()
            localStorage.setItem('authState', state)
            window.location.href = mobileAuthURI
        } else if (searchParams.toString() && !localStorage.getItem('redditToken')) {
            const state = localStorage.getItem('authState')
            const responseResult = redditAPI.checkApiResponse(searchParams, state)
            if (typeof responseResult !== 'object') {
                redditAPI.requestAccessToken(responseResult)
            } else {
                setLoginStatus(responseResult.errorInfo)
            }
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

export { loginLoader }
export default Login