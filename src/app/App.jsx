import { useEffect } from 'react'
import { setThemePreference, setBodyTheme } from '../app/functions/helper-functions'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import Board from './components/board/board'

function App () {

    useEffect(() => {
      // Set theme on page load if one isnt already in localStorage
      function handlePageLoad () {
          const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

          if (!localStorage.getItem('current-theme')){
              setThemePreference(currentTheme)
          }
          setBodyTheme(localStorage.getItem('current-theme'))
      }
      window.addEventListener('load', handlePageLoad)

      // Change theme on system preference change
      function detectSystemThemeChange ({ matches: isDark}) {
          const currentTheme = isDark ? 'dark' : 'light'

          setThemePreference(currentTheme)
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemThemeChange)

      return () => {
          window.removeEventListener('load', handlePageLoad)
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', detectSystemThemeChange)
      }
  }, [])

  return (
    <>
      <Navbar />
      <Sidebar />
      <Board />
    </>
  )
}

export default App
