import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import { Outlet, redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUserInfo } from './features/userButton/userButtonSlice'

const appLoader = ({ request }) => {
  //check localStorage for Api token and experation time -> send to login page if needed?
  if (!localStorage.getItem('redditToken')) {
    return redirect('/')
  }
  return null
}

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
          await dispatch(fetchUserInfo()).unwrap()
      } catch (error) {
          console.error(error.message)
      }
    })()
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