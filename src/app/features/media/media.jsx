import { useRef, useEffect } from 'react'
import './media.css'
import dashjs from 'dashjs'

const Media = (props) => {
    const redditVideoURL = helpers.correctURL(props.media?.reddit_video?.dash_url)
    const youtubeVideo = helpers.correctURL(props.media?.oembed?.html)
    const mediaRef = useRef(null)
    const mediaContainerRef = useRef(null)

    useEffect(() => {
        if (redditVideoURL) {
            const player = dashjs.MediaPlayer().create()
            player.initialize(mediaRef.current, redditVideoURL, false)
         } else if (props.youtubeElement) {
            //mediaContainerRef.current.innerHTML = props.youtubeElement
        }
        // Twitter - embed url link provided in media
    }, [])

    return (
        <div id='media-container' ref={videoContainerRef}>
            {redditVideoURL && <video id='media-player' ref={videoRef} controls></video>}
        </div>
    )
}

export default Media