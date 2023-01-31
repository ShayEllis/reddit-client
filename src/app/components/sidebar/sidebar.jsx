import './sidebar.css'

const Sidebar = () => {
    const handleSidebarButtonClick = () => {
        const sidebarButtonClassList = document.getElementById('open-close-sidebar').classList
        const sidebarConatinerClassList = document.getElementById('sidebar').classList

        if (window.innerWidth > 575) {
            sidebarButtonClassList.toggle('button-is-rotated')
            sidebarConatinerClassList.toggle('sidebar-is-closed')
            if (sidebarButtonClassList.contains('button-not-rotated') || sidebarButtonClassList.contains('sidebar-not-closed')) {
                sidebarButtonClassList.remove('button-not-rotated')
                sidebarConatinerClassList.remove('sidebar-not-closed') 
            }
        } else if (window.innerWidth <= 575) {
            sidebarButtonClassList.toggle('button-not-rotated')
            sidebarConatinerClassList.toggle('sidebar-not-closed')
            if (sidebarButtonClassList.contains('button-is-rotated') || sidebarButtonClassList.contains('sidebar-is-closed')) {
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
                <li><a className='sidebar-item'>Best</a></li>
                <li><a className='sidebar-item'>Hot</a></li> {/* Generate these with reddit API */}
                <li><a className='sidebar-item'>New</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>New</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>New</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
                <li><a className='sidebar-item'>Top</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar