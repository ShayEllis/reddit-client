import App from '../app/App'
import Error from '../app/components/error/error'
import Board from '../app/components/board/board'
import { appLoader } from '../app/App'
import { apiAuth } from '../app/api/reddit-api'

const appRoutes = [
    {
        path: '/',
        element: <App />,
        loader: appLoader,
        errorElement: <Error />,
        children: [
            {
                path: '/authenticate/:apiResponse'
            },
            {
                path: '/board',
                element: <Board />
            }
        ]
    }
]

export default appRoutes