import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { redditAPI } from './api/reddit-api'

const appLoader = ({ request }) => {
  //check localStorage for Api token and experation time -> send to login page if needed
  return 'test' //redirect('/login')
}

function App () {
  const test = useLoaderData();

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