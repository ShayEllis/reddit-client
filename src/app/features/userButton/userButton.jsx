import { useEffect } from 'react'
import UserButtonOptions from '../userButtonOption/userButtonOptions'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsDropdownVisible, selectUserInfo, toggleOptionList, selectStatus, fetchUserInfo } from './userButtonSlice'
import './userButton.css'

const UserButton = () => {
    const dispatch = useDispatch()
    const optionsVisible = useSelector(selectIsDropdownVisible)
    const userInfo = useSelector(selectUserInfo)
    const fetchStatus = useSelector(selectStatus)

    useEffect(() => {
        (async () => {
            try {
                await dispatch(fetchUserInfo()).unwrap()
            } catch (error) {
                console.error(error.message)
            }
        })()
    }, [])

    const handleUserButtonClick = (event) => {
        event.stopPropagation()
        dispatch(toggleOptionList())
    }

    return (
        <div id='user-dropdown'>
            <button id='user-button' title={userInfo.name} onClick={handleUserButtonClick}>
                {fetchStatus === 'fulfilled' ? <img src={userInfo.correctedIconImgURL} /> : <span id="loader"></span>}
            </button>   
            {optionsVisible && <UserButtonOptions />}
        </div>
    )
}

export default UserButton