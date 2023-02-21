import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectChildren } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'

const Board = () => {
    const searchResults = useSelector(selectChildren)
    //console.log(searchResults)

    useEffect(() => {

    }, [searchResults])

    return (
        <main id='board-container'>
            {searchResults.map((post) => {
                    return <Post key={post.id} post={post} />
                })
            }
        </main>
    )
}

export default Board