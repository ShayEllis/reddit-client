import { useRef, useEffect } from 'react'
import './videoPlayer.css'
import dashjs from 'dashjs'

const VideoPlayer = (props) => {
    const videoRef = useRef(null)

    useEffect(() => {
        const src = props.src
        const video = videoRef.current
        const player = dashjs.MediaPlayer().create()
        player.initialize(video, src, false)
    }, [])

    return (
        <div id='video-container'>
            <video id='video-player' ref={videoRef} controls></video>
        </div>
    )
}

export default VideoPlayer