import App from '../app/App'
import Error from '../app/components/error/error'
import Board from '../app/components/board/board'
import Login from '../app/features/login/login'
import { appLoader } from '../app/App'

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
        children: [
            {
                path: 'board',
                element: <Board />
            }
        ]
    },
]

export default appRoutes