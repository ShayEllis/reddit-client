import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './userButtonOptions.css'
import ThemeButton from '../themeButton/themeButton'

const UserButtonOptions = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkButtonClick = () => {
            console.log('clicked')
        }
        
        window.addEventListener('click', checkButtonClick)

        return () => {
            console.log('unmounted')
            window.removeEventListener('click', checkButtonClick)
        }
    }, [])

    function handleLogout () {
        localStorage.clear()
        navigate('/')
    }

    return (
        <ul id='dropdown-content'>
            <li><ThemeButton /></li>
            <li onClick={handleLogout}>Logout</li>
        </ul>
    )
}

export default UserButtonOptions