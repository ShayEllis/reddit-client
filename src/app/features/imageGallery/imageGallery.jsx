import { useEffect, useState, useRef } from 'react'
import './imageGallery.css'
import helpers from '../../functions/helper-functions'

const ImageGallery = (props) => {
    const prevButton = useRef(null)
    const nextButton = useRef(null)
    const imgurLink = props.imgurLink
    const singleImageLink = typeof props.images === 'string' && props.images
    const galleryImages = typeof props.images === 'object' && props.images

    const [imageElementArray, setimageElementArray] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (galleryImages) {
            if (currentImageIndex === 0) {
                prevButton.current.style.display = 'none'
                nextButton.current.style.display = 'block'
            } else if(currentImageIndex === imageElementArray.length -1) {
                prevButton.current.style.display = 'block'
                nextButton.current.style.display = 'none'
            }
        }
    }, [currentImageIndex])


    useEffect(() => {
        if (galleryImages) {
            setimageElementArray(Object.keys(galleryImages).map((image) => {
                if (galleryImages[image].e === 'Image') {
                    const imageId = galleryImages[image].id
                    const imageSizeArray = galleryImages[image].p
                    const imageFullSize = galleryImages[image].s
                    if (imageSizeArray) {
                        return (
                            <img key={imageId} src={helpers.convertHTMLCodes(imageSizeArray[imageSizeArray.length - 1].u)} />
                        )
                    } else if (imageFullSize) {
                        return (
                            <img key={imageId} src={helpers.convertHTMLCodes(imageFullSize.u)} />
                        )
                    }
                }
            }))
        }
    }, [galleryImages])

    const handlePrevButtonClick = (event) => {
        setCurrentImageIndex((pre) => pre - 1)
    }

    const handleNextButtonClick = (event) => {
        setCurrentImageIndex((pre) => pre + 1)
    }

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
                        <div className="mySlides">
                            <div className="numbertext"><span>{`${currentImageIndex + 1} / ${imageElementArray.length}`}</span></div>
                            <a id='img-link' target='_blank'>{imageElementArray[currentImageIndex]}</a>
                        </div>
                        <a id="prev" ref={prevButton} onClick={handlePrevButtonClick}><span>❮</span></a>
                        <a id="next" ref={nextButton} onClick={handleNextButtonClick}><span>❯</span></a>
                    </div>
            }
        </>
    )
}

export default ImageGallery