import './sidebar.css'

const Sidebar = () => {
    return (
        <aside id='sidebar-container' > {/* Add button to open sidebar when window width is below 575px */}
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