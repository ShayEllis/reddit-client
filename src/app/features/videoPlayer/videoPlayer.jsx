import { useRef, useEffect } from 'react'
import './videoPlayer.css'
import dashjs from 'dashjs'

const VideoPlayer = (props) => {
    const videoRef = useRef(null)
    const videoContainerRef = useRef(null)

    useEffect(() => {
        if (props.redditSRC) {
            const player = dashjs.MediaPlayer().create()
            player.initialize(videoRef.current, props.redditSRC, false)
         } else if (props.youtubeElement) {
            videoContainerRef.current.innerHTML = props.youtubeElement
        }
    }, [])

    return (
        <div id='video-container' ref={videoContainerRef}>
            {props.redditSRC && <video id='video-player' ref={videoRef} controls></video>}
        </div>
    )
}

export default VideoPlayer