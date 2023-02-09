import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { redditAPI } from "../../api/reddit-api"
import { useSearchParams } from "react-router-dom"
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    // console.log(searchParams.toString())
    // console.log(searchParams.get('state'))
    // console.log(searchParams.get('code'))
    // console.log(searchParams.get('error'))

    useEffect(() => {
        if (!localStorage.getItem('redditToken') && !searchParams.toString()) { // also need to account for "undefined"
            const { mobileAuthURI, state, } = redditAPI.generateAuthorizationURI()
            localStorage.setItem('authState', state)
            window.location.href = mobileAuthURI
        } else if (searchParams.toString()) {
            const state = localStorage.getItem('authState')
            const responseResult = redditAPI.checkApiResponse(searchParams, state)
            console.log((typeof responseResult === 'object') ? responseResult.errorInfo : responseResult)

            try {
                console.log(redditAPI.requestAccessToken(responseResult))
            } catch (error) {
                console.log(error)
            }
        } else {
            //navigate('/')
            //console.log('else')
        }
    }, [])

    return (
        <section id='login-page'>
            <h2>Login</h2>
        </section>
    )
}

export default Login