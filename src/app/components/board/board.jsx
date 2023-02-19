import { useSelector } from 'react-redux'
import { selectChildren } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'


const Board = () => {
    const searchResults = useSelector(selectChildren)
    console.log(searchResults)

    return (
        <main id='board-container'>
            {searchResults.map((result) => <Post key={result.id} result={result} />)}
        </main>
    )
}

export default Board