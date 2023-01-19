import Searchbar from '../../features/searchbar/Searchbar'

function Navbar () {
    return (
        <header id='top-nav'>
            <div id='top-nav-logo'>
                <div id='top-nav-img-container'>
                    <img src='' alt='' />
                </div>
                <h1>Reddit Client</h1>
            </div>
            <Searchbar />
        </header>
    )
}

export default Navbar