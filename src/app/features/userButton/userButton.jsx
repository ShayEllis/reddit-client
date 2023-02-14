import UserButtonOptions from '../userButtonOption/userButtonOptions'
import { useSelector, useDispatch } from 'react-redux'
import { optionsVisibleSelector, toggleOptionList } from './userButtonSlice'
import './userButton.css'

const UserButton = () => {
    const dispatch = useDispatch()
    const optionsVisible = useSelector(optionsVisibleSelector)

    const handleUserButtonClick = (event) => {
        event.stopPropagation()
        dispatch(toggleOptionList())
        //const dropdownContent = document.getElementById('dropdown-content')
        //dropdownContent.style.display = 'block'
    }

    return (
        <div id='user-dropdown'>
            <button id='user-button' title='User Button' onClick={handleUserButtonClick}>
                <img src='https://styles.redditmedia.com/t5_7s6bcf/styles/profileIcon_snooe0510270-29ac-4d9a-8714-4c7f3fca994f-headshot.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;v=enabled&amp;s=007275ed8c11b8bb68cc792f211260e107f19104' />
            </button>   
            {optionsVisible ? <UserButtonOptions /> : ''}
        </div>
    )
}

export default UserButton