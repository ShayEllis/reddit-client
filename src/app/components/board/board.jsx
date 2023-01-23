import './board.css'
import Post from '../../features/post/post'

const Board = () => {
    return (
        <main id='board-container'>
            <Post /> {/* I only put multiple here to test */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    )
}

export default Board