import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App'
import './reset.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Page routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        
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
