import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectChildren, selectStatus } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'

const Board = () => {
    const searchResults = useSelector(selectChildren)
    //console.log(searchResults)
    const searchStatus = useSelector(selectStatus)
    console.log(searchStatus)

    useEffect(() => {

    }, [searchResults])

    return (
        <main id='board-container'>
            {searchStatus === 'fulfilled' ? searchResults.map((post) => {
                    return <Post key={post.id} post={post} />
                })
            :
            <>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
                <div className='board-loader'></div>
            </>}
        </main>
    )
}

export default Board