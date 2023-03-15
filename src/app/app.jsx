import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Board from './components/board/board'
import { redirect } from 'react-router-dom'
import helpers from './functions/helper-functions'
import { searchReddit, changeSearchValue, changeSubmittedSearchValue, changeChartValue } from './features/searchbar/searchbarSlice'
import store from '../root/store'

const appLoader = ({ request }) => {
  const isExpired = helpers.checkTokenExpiration()
  if (!localStorage.getItem('redditToken') || isExpired) {
    return redirect('/')
  }
  //When the search input is submitted, the value is added to the URL as a parameter
  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  const chart = url.searchParams.get('chart')
  const submittedSearchValue = store.getState().searchbar.submittedSearchValue
  const chartValue = store.getState().searchbar.chartValue
  if (search) {
      if (submittedSearchValue !== search) {
          store.dispatch(changeChartValue(''))
          store.dispatch(searchReddit({searchStr: search}))
          store.dispatch(changeSubmittedSearchValue(search))
          store.dispatch(changeSearchValue(search))
      }
  } else if (!chart) {
      return redirect('/app?chart=best')
  } else {
      if (chartValue !== chart) {
          store.dispatch(changeSubmittedSearchValue(''))
          store.dispatch(changeSearchValue(''))
          store.dispatch(searchReddit({chart: chart}))
          store.dispatch(changeChartValue(chart))
      }
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