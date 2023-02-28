import { useRef, useEffect } from 'react'
import './media.css'
import helpers from '../../functions/helper-functions'
import dashjs from 'dashjs'

const Media = (props) => {
    const redditVideoURL = helpers.adjustURL(props.media?.reddit_video?.dash_url)
    const youtubeVideo = helpers.adjustURL(props.media?.oembed?.html, true)
    const mediaRef = useRef(null)
    const mediaContainerRef = useRef(null)

    useEffect(() => {
        if (redditVideoURL) {
            const player = dashjs.MediaPlayer().create()
            player.initialize(mediaRef.current, redditVideoURL, false)
            mediaRef.current.style.width = `${props.media.reddit_video.width}px`
            mediaRef.current.style.height = `${props.media.reddit_video.height}px`
         } else if (props.media.type === 'youtube.com') {
            mediaContainerRef.current.innerHTML = youtubeVideo
        } 
        
    }, [])

    return (
        <div id='media-container' ref={mediaContainerRef}>
            {redditVideoURL && <video id='media-player' ref={mediaRef} controls></video>}
        </div>
    )
}

export default Media

