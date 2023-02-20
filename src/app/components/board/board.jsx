import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectChildren } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'
import helpers from '../../functions/helper-functions'

const Board = () => {
    const searchResults = useSelector(selectChildren)
    const [posts, setPosts] = useState([])
    //console.log(searchResults)
    //console.log(posts)

    useEffect(() => {
        const result = searchResults.map((item) => {
            console.log(item)
            const videoSRC = helpers.correctURL(item.media?.reddit_video?.dash_url) //youtube videos are just provide iframe html
            return <Post key={item.id} result={item} videoSRC={videoSRC} />
        })
        setPosts(result)
    }, [searchResults])

    return (
        <main id='board-container'>
            {posts}
        </main>
    )
}

export default Board