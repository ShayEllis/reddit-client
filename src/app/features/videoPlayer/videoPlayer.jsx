import { useEffect } from 'react'
import './videoPlayer.css'



const VideoPlayer = (props) => {
    useEffect(() => {
        console.log(props.key)
        if (!document.getElementById('video-player')) {
            const videoElement = document.createElement('video')
            videoElement.setAttribute('data-dashjs-player', '')
            videoElement.setAttribute('id', 'video-player')
            videoElement.setAttribute('src', 'https://v.redd.it/zl71ikixohia1/DASHPlaylist.mpd?a=1679410722%2CYmI4ZDk4NzhlYTY0ZTEzNjc1ZGU0YzQwYjg3MDc0ZGQ0Njc3MDBlY2MxZGQ1ZDZjYTRiYWIwZTViMDg3ZWUzOA%3D%3D&v=1&f=sd')
            videoElement.setAttribute('controls', 'true')
            document.getElementById('video-container').appendChild(videoElement)
        }
        console.log(document.getElementById('video-player'))
    }, [])
    return (
        <div id='video-container'></div>            
    )
}

export default VideoPlayer