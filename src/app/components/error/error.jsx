import { useRouteError } from 'react-router-dom'
import './error.css'

function Error() {
    const error = useRouteError()

    return (
        <section id='error-page'>
            <h2>Oh No!</h2>
            <p>An error has occurred</p>
            <p>{`${error.status} - ${error.statusText}`}</p>
            <p>{error.data}</p>
        </section>
    )
}

export default Error