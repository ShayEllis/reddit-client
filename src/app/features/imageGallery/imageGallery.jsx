import { useEffect } from 'react'
import './imageGallery.css'

const ImageGallery = (props) => {
    useEffect(() => {

    }, [])

    return (
        typeof props.images === 'string' 
        ?
        <a href={props.images} target="_blank"><img src={props.images} /></a>
        :
        <div className="container">
            <div className="mySlides" style={{ display: 'block'}}>
                <div className="numbertext"><span>1 / 6</span></div>
                <a id='img-link' target='_blank'><img src="https://www.w3schools.com/howto/img_woods_wide.jpg" /></a>
            </div>
                
            <a id="prev"><span>❮</span></a>
            <a id="next"><span>❯</span></a>
        </div>
    )
}

export default ImageGallery