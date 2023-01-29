import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './reset.css'

import App from '../app/App'
import Error from '../app/components/error/error'
import Board from '../app/components/board/board'
import { appLoader } from '../app/App'
import { apiAuth } from '../app/api/reddit-api'

// Page routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/authenticate/:apiResponse',
      },
      {
        path: '/post',
        element: <Board />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
