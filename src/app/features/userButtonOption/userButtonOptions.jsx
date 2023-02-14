import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './userButtonOptions.css'
import ThemeButton from '../themeButton/themeButton'
import { toggleOptionList } from '../userButton/userButtonSlice'

const UserButtonOptions = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const checkButtonClick = (event) => {
            if (!event.target.closest('#dropdown-content')) {
                dispatch(toggleOptionList())
            }
        }
        window.addEventListener('click', checkButtonClick)

        return () => {
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