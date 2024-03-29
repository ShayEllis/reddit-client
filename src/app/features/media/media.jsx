import { useRef, useEffect } from 'react'
import './media.css'
import helpers from '../../functions/helper-functions'
import dashjs from 'dashjs'

const Media = (props) => {
    const redditVideoURL = helpers.adjustURL(props.media?.reddit_video?.dash_url)
    const youtubeVideo = props.media?.type === 'youtube.com' && helpers.adjustURL(props.media?.oembed?.html, true)
    const twitter = props.media?.type === 'twitter.com' && props.media?.oembed?.url
    const redditVideoPlayer = useRef(null)
    const youtubeContainer = useRef(null)

    useEffect(() => {
        if (redditVideoURL) {
            const player = dashjs.MediaPlayer().create()
            player.initialize(redditVideoPlayer.current, redditVideoURL, false)
            redditVideoPlayer.current.style.width = `${props.media.reddit_video.width}px`
         } else if (youtubeVideo) {
            youtubeContainer.current.innerHTML = youtubeVideo
        } 
        
    }, [])

    return (
        <div id='media-container'>
            {redditVideoURL && <video id='reddit-video-player' ref={redditVideoPlayer} controls></video>}
            {youtubeVideo && <div id='youtube-container' ref={youtubeContainer}></div>}
            {twitter && <a href={twitter} target="_blank">View on Twitter</a>}
        </div>
    )
}

export default Media