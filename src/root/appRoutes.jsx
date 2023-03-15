import App, { appLoader } from '../app/app'
import Error from '../app/components/error/error'
import Login from '../app/features/login/login'

const appRoutes = [
    {
        path: '/',
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: 'app',
        element: <App />,
        loader: appLoader,
    },
]

export default appRoutes