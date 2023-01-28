import { useState, useEffect } from 'react'
import Searchbar from '../../features/searchbar/Searchbar'
import { setThemePreference, setHtmlTheme, detectTheme } from '../../functions/load-theme-helper-functions'
import './navbar.css'

function Navbar () {
    const [currentTheme, setCurrentTheme] = useState(detectTheme())

    useEffect(() => {
            // Set theme on page load if one isnt already in localStorage
            function handlePageLoad () {
                const currentTheme = detectTheme()
                if (!localStorage.getItem('current-theme')){
                    setThemePreference(currentTheme)
                }
                setHtmlTheme(currentTheme)
            }
            window.addEventListener('load', handlePageLoad)

            // Change theme on system preference change
            function detectSystemThemeChange ({ matches: isDark}) {
                const currentTheme = isDark ? 'dark' : 'light'
                // Set localStorage theme value and local function state
                setThemePreference(currentTheme)
                setCurrentTheme(currentTheme)
            }
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemThemeChange)

        return () => {
            window.removeEventListener('load', handlePageLoad)
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', detectSystemThemeChange)
        }
    }, [])

    // Set localStorage theme value corresponding to the button that was clicked
    function handleThemeButtonClick (event) {
        const newTheme = detectTheme() === 'dark' ? 'light' : 'dark'
        // Set localStorage theme value and local function state
        setThemePreference(newTheme)
        setCurrentTheme(newTheme)
    }

    return (
        <header id='top-nav'>
            <div id='top-nav-logo-container'>
                <div id='logo-title-container'>
                    <svg id='top-nav-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10"></circle>
                        <path d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
                    </svg>
                    <h1>Client for Reddit</h1>
                </div>
                <button id='toggle-theme' onClick={handleThemeButtonClick} title='Theme' >
                    {currentTheme === 'dark' ? 
                    <svg className='light-theme-icon' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
                        <g><path strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M25,16c4.963,0,9,4.038,9,9c0,4.963-4.037,9-9,9c-4.962,0-9-4.037-9-9C16,20.038,20.038,16,25,16"/></g><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="25" y1="45" x2="25" y2="39"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="25" y1="11" x2="25" y2="5"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="5" y1="25" x2="11" y2="25"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="39" y1="25" x2="45" y2="25"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="10.858" y1="39.143" x2="15.101" y2="34.9"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="34.899" y1="15.102" x2="39.143" y2="10.858"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="10.858" y1="10.858" x2="15.101" y2="15.102"/><line stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" x1="34.899" y1="34.9" x2="39.143" y2="39.143"/>
                    </svg>
                    :
                    <svg className="dark-theme-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M566.422 1024c157.924 0 302.158-71.85 397.714-189.584 14.136-17.416-1.278-42.86-23.124-38.7-248.406 47.308-476.524-143.152-476.524-393.908 0-144.444 77.324-277.27 202.996-348.788 19.372-11.024 14.5-40.394-7.512-44.46A516.312 516.312 0 0 0 566.422 0c-282.618 0-512 229.022-512 512 0 282.618 229.022 512 512 512z"  />
                    </svg>}
                </button>
            </div>
            <Searchbar />
        </header>
    )
}

export default Navbar