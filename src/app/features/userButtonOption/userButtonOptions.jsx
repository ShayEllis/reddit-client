import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './userButtonOptions.css'
import ThemeButton from '../themeButton/themeButton'

const UserButtonOptions = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkButtonClick = (event) => {
            console.log(event.target.closest('#dropdown-content')) // use to check if the element clicked is a descendant


            // console.log(allButtonOptionDescendants)
            // console.log(event.srcElement)
            // allButtonOptionDescendants.forEach((el) => {
            //     if (el === event.srcElement) { 
            //         console.log(true) 
            //     }
            // })
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