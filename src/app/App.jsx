import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import { Outlet, redirect } from 'react-router-dom'
import helpers from './functions/helper-functions'

const appLoader = () => {
  const isExpired = helpers.checkTokenExpiration()

  if (!localStorage.getItem('redditToken') || isExpired) {
    return redirect('/')
  }
  return null
}

function App () {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

export { appLoader }
export default App