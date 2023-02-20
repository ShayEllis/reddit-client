import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectChildren } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'
import helpers from '../../functions/helper-functions'

const Board = () => {
    const searchResults = useSelector(selectChildren)
    //console.log(searchResults)
    //console.log(posts)

    useEffect(() => {

    }, [searchResults])

    return (
        <main id='board-container'>
            {searchResults.map((item) => {
                    const videoSRC = helpers.correctURL(item.media?.reddit_video?.dash_url) //youtube videos are just provide iframe html
                    return <Post key={item.id} result={item} videoSRC={videoSRC} />
                })
            }
        </main>
    )
}

export default Board