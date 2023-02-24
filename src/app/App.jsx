import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import Board from './components/board/board'
import { redirect } from 'react-router-dom'
import helpers from './functions/helper-functions'
import { searchReddit, changeSearchValue } from './features/searchbar/searchbarSlice'
import store from '../root/store'

const appLoader = ({ request }) => {
  const isExpired = helpers.checkTokenExpiration()
  if (!localStorage.getItem('redditToken') || isExpired) {
    return redirect('/')
  }
  //When the search input is submitted, the value is added to the URL as a parameter
  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  if (search) {
      store.dispatch(searchReddit({searchStr: search}))
      store.dispatch(changeSearchValue(search))
  }
  return null
}

function App () {
  return (
    <>
      <Header />
      <Sidebar />
      <Board />
    </>
  )
}

export { appLoader }
export default App