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
            const videoSRC = helpers.correctURL(item.media?.reddit_video.fallback_url)
            return <Post key={item.id} result={item} videoSRC={videoSRC} />
        })
        setPosts(result)
    }, [searchResults])

    return (
        <main id='board-container'>
            
            {/* <Post videoSRC={'https://v.redd.it/zl71ikixohia1/DASHPlaylist.mpd?a=1679410722%2CYmI4ZDk4NzhlYTY0ZTEzNjc1ZGU0YzQwYjg3MDc0ZGQ0Njc3MDBlY2MxZGQ1ZDZjYTRiYWIwZTViMDg3ZWUzOA%3D%3D&v=1&f=sd'} /> */}
            {posts}
            </main>
    )
}

export default Board