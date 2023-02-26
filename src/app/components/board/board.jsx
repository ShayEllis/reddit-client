import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectChildren, selectStatus } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'

const Board = () => {
    const searchResults = useSelector(selectChildren)
    const searchStatus = useSelector(selectStatus)

    useEffect(() => {

    }, [searchResults])

    return (
        <main>
            <section id='board-container'>
                {searchStatus === 'fulfilled' 
                    ? searchResults.map((post) => {
                            return <Post key={post.id} post={post} />
                        })
                    :
                    <>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>// not taking up 100% width
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                        <div id='board-loader'></div>
                    </>}
            </section>
        </main>
    )
}

export default Board