import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import { Outlet, redirect } from 'react-router-dom'
import { useEffect } from 'react'
import helpers from './functions/helper-functions'

const appLoader = () => {
  const isExpired = helpers.checkTokenExpiration()

  if (!localStorage.getItem('redditToken') || isExpired) {
    return redirect('/')
  }
  return null
}

function App () {

  useEffect(() => {
    const importModule = async () => {
      const module = await import('../../node_modules/dashjs/dist/dash.all.min.js')
      console.log(module)
    };
    importModule();
  })

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