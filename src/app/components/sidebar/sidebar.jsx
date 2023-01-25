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
        const sidebarButtonClassList = event.target.parentNode.classList
        const sidebarConatinerClassList = event.target.parentNode.parentNode.classList

        if (windowWidth > 575) {
            if (!sidebarButtonClassList.contains('button-is-rotated')) {
                sidebarButtonClassList.remove('button-not-rotated')
                sidebarConatinerClassList.remove('sidebar-is-open')
                sidebarButtonClassList.add('button-is-rotated')
                sidebarConatinerClassList.add('sidebar-is-closed')
            } else {
                sidebarButtonClassList.remove('button-is-rotated')
                sidebarConatinerClassList.remove('sidebar-is-closed')
            }  
        } else if (windowWidth <= 575) {
            if(!sidebarButtonClassList.contains('button-not-rotated')){
                sidebarButtonClassList.remove('button-is-rotated')
                sidebarConatinerClassList.remove('sidebar-is-closed')
                sidebarButtonClassList.add('button-not-rotated')
                sidebarConatinerClassList.add('sidebar-is-open')
            } else {
                sidebarButtonClassList.remove('button-not-rotated')
                sidebarConatinerClassList.remove('sidebar-is-open')
            }
        }
    }

    return (
        <aside className='sidebar-container' > {/* Add button to open sidebar when window width is below 575px */}
            <button className='open-close-sidebar-button' onClick={handleSidebarButtonClick}>
                <img alt='open/close sidebar' />
            </button>
            <ul id='sidebar-list-container'>
                <li className='sidebar-item'><a>Best</a></li> {/* Add images next to each link? */}
                <li className='sidebar-item'><a>Hot</a></li> {/* Generate these with reddit API */}
                <li className='sidebar-item'><a>New</a></li>
                <li className='sidebar-item'><a>Top</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar