import { useNavigate } from 'react-router-dom'
import './userButton.css'
import ThemeButton from '../themeButton/themeButton'

const UserButton = () => {
    const navigate = useNavigate()
    const handleUserButtonClick = (event) => {
        console.log(event)
        const dropdownContent = document.getElementById('dropdown-content')
        dropdownContent.style.display = 'block'
    }

    const handleUserButtonBlur = (event) => {
        console.log(event)
    }

    function handleLogout () {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div id='user-dropdown' onBlur={handleUserButtonBlur}>
            <button id='user-button' title='User Button' onClick={handleUserButtonClick}>
                <img src='https://styles.redditmedia.com/t5_7s6bcf/styles/profileIcon_snooe0510270-29ac-4d9a-8714-4c7f3fca994f-headshot.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;v=enabled&amp;s=007275ed8c11b8bb68cc792f211260e107f19104' />
            </button>   
            <ul id='dropdown-content' onBlur={handleUserButtonBlur}>
                <li>Toggle Theme<ThemeButton /></li>
                <li onClick={handleLogout}>Logout</li>
                <li>Logout</li>
                <li>Test</li>
            </ul>
        </div>
    )
}

export default UserButton