import './sidebar.css'

const Sidebar = () => {
    return (
        <aside id='sidebar-container' >
            <ul id='sidebar-list-container'>
                <li className='sidebar-item'><a>First</a></li>
                <li className='sidebar-item'><a>Second</a></li> {/* Generate these with reddit API */}
                <li className='sidebar-item'><a>Third</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar