import { useState, useEffect } from 'react'
import './searchbar.css'
import { searchReddit, selectBefore, selectAfter,} from './searchbarSlice'
import { useDispatch, useSelector } from 'react-redux'

const Searchbar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')  // Move to redux

    useEffect(() => {
        dispatch(searchReddit({searchStr: 'dogs'}))
    }, [])
    
    const handleSearchbarFocus = (event) => {
        event.target.classList.remove('searchbar-inactive')
        event.target.classList.add('searchbar-active')
    }

    const handleSearchbarBlur = (event) => {
        if (!event.target.value && event.relatedTarget?.id !== "search-button"){
            event.target.classList.remove('searchbar-active')
            event.target.classList.add('searchbar-inactive')
        }
    }

    const handleChange = ({ target }) => {
        setSearch(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(document.getElementById('searchbar').value) // may not need if auto searching as you type
    }

    return (
        <form id='search-container' role="search" onSubmit={handleSubmit} >
            <input type='search' id='searchbar' className='searchbar-inactive' name='searchbar' aria-label='search reddit' placeholder='Search...' value={search} onChange={handleChange} onFocus={handleSearchbarFocus} onBlur={handleSearchbarBlur} required /> {/* Add value to track search input */}
            <button id='search-button'>
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero" />
                </svg>
            </button>
        </form>
    )
}

export default Searchbar