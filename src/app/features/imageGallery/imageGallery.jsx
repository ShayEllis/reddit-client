import { useEffect } from 'react'
import './imageGallery.css'
import helpers from '../../functions/helper-functions'

const ImageGallery = (props) => {
    const imgurLink = props.imgurLink
    const singleImageLink = typeof props.images === 'string' && props.images
    const galleryImages = typeof props.images === 'object' && props.images

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
                        {Object.keys(galleryImages).map((image, index) => {
                            if (galleryImages[image].e === 'Image') {
                                const imageId = galleryImages[image].id
                                const imageSizeArray = galleryImages[image].p
                                const imageFullSize = galleryImages[image].s
                                if (imageSizeArray) {
                                    return (
                                            <div className="mySlides" key={imageId}>
                                                <div className="numbertext"><span>{index + 1}</span></div>
                                                <a id='img-link' target='_blank'><img src={helpers.convertHTMLCodes(imageSizeArray[imageSizeArray.length - 1].u)} /></a>
                                            </div>                      
                                    )
                                } else if (imageFullSize) {
                                    return (
                                            <div className="mySlides" key={imageId}>
                                                <div className="numbertext"><span>{index + 1}</span></div>
                                                <a id='img-link' target='_blank'><img src={helpers.convertHTMLCodes(imageFullSize.u)} /></a>
                                            </div>
                                    )
                                }
                            }
                        })}
                        <a id="prev"><span>❮</span></a>
                        <a id="next"><span>❯</span></a>
                    </div>
            }
        </>
    )
}

export default ImageGallery