import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const appLoader = ({ request }) => {
  return "test"
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