import { redditAPI } from "../../api/reddit-api"
import { useSearchParams } from "react-router-dom"

const Login = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('state'))
    console.log(searchParams.get('code'))
    return (
        <section id='error-page'>
            <h2>Login</h2>
        </section>
    )
}

export default Login