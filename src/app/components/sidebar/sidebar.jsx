import { useEffect, useState } from 'react'
import './sidebar.css'

const Sidebar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() =>{
        function updateWindowWidth () {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWindowWidth)

        return () => {
            window.removeEventListener('resize', updateWindowWidth)
        }
    }, [])

    const handleSidebarButtonClick = (event) => {
        const sidebarButtonClassList = document.getElementById('open-close-sidebar').classList
        const sidebarConatinerClassList = document.getElementById('sidebar').classList

        if (windowWidth > 575) {
            sidebarButtonClassList.toggle('button-is-rotated')
            sidebarConatinerClassList.toggle('sidebar-is-closed')

        } else if (windowWidth <= 575) {
            sidebarButtonClassList.toggle('button-not-rotated')
            sidebarConatinerClassList.toggle('sidebar-not-closed')
        }
    }

    return (
        <aside id='sidebar' className='sidebar-container' > {/* Add button to open sidebar when window width is below 575px */}
            <button id='open-close-sidebar' className='open-close-sidebar-button' onClick={handleSidebarButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 312 511.42">
                    <path fill-rule="nonzero" d="M35.54 0 312 252.82 29.84 511.42 0 478.8l246.54-225.94L5.7 32.62z"/>
                </svg>            
            </button>
            <ul id='sidebar-list-container'>
                <li><a className='sidebar-item'>Best</a></li> {/* Add images next to each link? */}
                <li><a className='sidebar-item'>Hot</a></li> {/* Generate these with reddit API */}
                <li><a className='sidebar-item'>New</a></li>
                <li><a className='sidebar-item'>Top</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar