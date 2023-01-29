import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import { Outlet } from 'react-router-dom'

const appLoader = ({ request }) => {
  return "test"
}

function App () {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  )
}

export { appLoader }
export default App