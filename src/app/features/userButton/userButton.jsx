import UserButtonOptions from '../userButtonOption/userButtonOptions'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsDropdownVisible, selectUserInfo, toggleOptionList, selectStatus } from './userButtonSlice'
import './userButton.css'

const UserButton = () => {
    const dispatch = useDispatch()
    const optionsVisible = useSelector(selectIsDropdownVisible)
    const userInfo = useSelector(selectUserInfo)
    const fetchStatus = useSelector(selectStatus)

    const handleUserButtonClick = (event) => {
        event.stopPropagation()
        dispatch(toggleOptionList())
    }

    return (
        <div id='user-dropdown'>
            <button id='user-button' title={userInfo.name} onClick={handleUserButtonClick}>
                {fetchStatus === 'fulfilled' ? <img src={userInfo.correctedIconImgURL} /> : <div className='loading-gradient'></div>}
            </button>   
            {optionsVisible && <UserButtonOptions />}
        </div>
    )
}

export default UserButton