import { useEffect } from 'react'
import './imageGallery.css'

const ImageGallery = (props) => {
    const imgurLink = props.imgurLink
    const singleImageLink = typeof props.images === 'string' && props.images

    useEffect(() => {

    }, [])

    return (
        <>
            {singleImageLink || imgurLink 
                ?
                    <>
                        {singleImageLink && <a href={singleImageLink} target="_blank"><img src={singleImageLink} /></a>}
                        {imgurLink && <a href={imgurLink} target="_blank">View on Imgur</a>}
                    </>
                :
                <div className="container">
                    <div className="mySlides" style={{ display: 'block'}}>
                        <div className="numbertext"><span>1 / 6</span></div>
                        <a id='img-link' target='_blank'><img src="https://www.w3schools.com/howto/img_woods_wide.jpg" /></a>
                    </div>
                        
                    <a id="prev"><span>❮</span></a>
                    <a id="next"><span>❯</span></a>
                </div>
            }
        </>
    )
}

export default ImageGallery