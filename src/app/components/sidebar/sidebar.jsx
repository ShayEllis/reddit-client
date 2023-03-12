import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectChartValue } from '../../features/searchbar/searchbarSlice'
import './sidebar.css'

const Sidebar = () => {
    const chartValue = useSelector(selectChartValue)

    const handleSidebarButtonClick = () => {
        const sidebarButtonClassList = document.getElementById('open-close-sidebar').classList
        const sidebarConatinerClassList = document.getElementById('sidebar').classList

        if (window.innerWidth > 575) {
            sidebarButtonClassList.toggle('button-is-rotated')
            sidebarConatinerClassList.toggle('sidebar-is-closed')
            if (sidebarButtonClassList.contains('button-not-rotated') || sidebarConatinerClassList.contains('sidebar-not-closed')) {
                sidebarButtonClassList.remove('button-not-rotated')
                sidebarConatinerClassList.remove('sidebar-not-closed') 
            }
        } else if (window.innerWidth <= 575) {
            sidebarButtonClassList.toggle('button-not-rotated')
            sidebarConatinerClassList.toggle('sidebar-not-closed')
            if (sidebarButtonClassList.contains('button-is-rotated') || sidebarConatinerClassList.contains('sidebar-is-closed')) {
                sidebarButtonClassList.remove('button-is-rotated')
                sidebarConatinerClassList.remove('sidebar-is-closed')
            }
        }
    }

    return (
        <aside id='sidebar' className='sidebar-container' >
            <button id='open-close-sidebar' className='open-close-sidebar-button' onClick={handleSidebarButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 312 511.42">
                    <path fillRule="nonzero" d="M35.54 0 312 252.82 29.84 511.42 0 478.8l246.54-225.94L5.7 32.62z"/>
                </svg>            
            </button>
            <ul id='sidebar-list-container'>
                <li><Link to={{ pathname: '/app', search: '?chart=best'}} className={chartValue === 'best' ? 'sidebar-item sidebar-item-selected' : 'sidebar-item'}>Best</Link></li>
                <li><Link to={{ pathname: '/app', search: '?chart=hot'}} className={chartValue === 'hot' ? 'sidebar-item sidebar-item-selected' : 'sidebar-item'}>Hot</Link></li>
                <li><Link to={{ pathname: '/app', search: '?chart=new'}} className={chartValue === 'new' ? 'sidebar-item sidebar-item-selected' : 'sidebar-item'}>New</Link></li>
                <li><Link to={{ pathname: '/app', search: '?chart=top'}} className={chartValue === 'top' ? 'sidebar-item sidebar-item-selected' : 'sidebar-item'}>Top</Link></li>
                <li><Link to={{ pathname: '/app', search: '?chart=rising'}} className={chartValue === 'rising' ? 'sidebar-item sidebar-item-selected' : 'sidebar-item'}>Rising</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar