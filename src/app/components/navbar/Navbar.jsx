import { useEffect } from 'react'
import Searchbar from '../../features/searchbar/Searchbar'
import './navbar.css'

function Navbar () {
    useEffect(() => {
        /*
        1. check if theme is stored in localStorage
            - if not set to current system stetting
            - if it is use localStorage theme
        2. if button is clicked override and change theme
        3. clear localStorage when app is closed?
        */
        function detectSystemThemeChange (event) {
            const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            localStorage.setItem('current-theme', currentTheme)
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemThemeChange)

        function handlePageLoad (event) {
            const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            console.log(currentTheme)
            console.log(localStorage.getItem('current-theme'))

            console.log(event)
        }
        window.addEventListener('load', handlePageLoad)
    })

    return (
        <header id='top-nav'>
            <div id='top-nav-logo-container'>
                <div id='logo-title-container'>
                    <svg id='top-nav-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10"></circle> {/* cannot use reddit logo, need to change */}
                        <path d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path>
                    </svg>
                    <h1>Client for Reddit</h1>
                </div>
                <div id='theme-dropdown'>
                    <button id='toggle-theme'>Theme</button>
                    <menu id='dropdown-options'>
                        <li><a>Light</a></li>
                        <li><a>Dark</a></li>
                    </menu>
                </div>
            </div>
            <Searchbar />
        </header>
    )
}

export default Navbar