import { useEffect, useState, useRef } from 'react'
import './imageGallery.css'
import helpers from '../../functions/helper-functions'

const ImageGallery = (props) => {
    const prevButton = useRef(null)
    const nextButton = useRef(null)
    const slideContainer = useRef(null)
    const imgurLink = props.imgurLink
    const singleImageLink = typeof props.images === 'string' && props.images
    const galleryImages = typeof props.images === 'object' && props.images

    const [imageElementArray, setimageElementArray] = useState([])
    const [galleryAspectRatio, setGalleryAspectRatio] = useState('3 / 4')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (galleryImages) {
            let aspectRatio = { width: 1, height: 1}
            setimageElementArray(Object.keys(galleryImages).map((image) => {
                if (galleryImages[image].e === 'Image') {
                    const imageId = galleryImages[image].id
                    const imageSizeArray = galleryImages[image].p
                    const imageFullSize = galleryImages[image].s
                    if (imageSizeArray) {
                        const imageUrl = helpers.convertHTMLCodes(imageSizeArray[imageSizeArray.length - 1].u)
                        const width = imageSizeArray[imageSizeArray.length - 1].x
                        const height = imageSizeArray[imageSizeArray.length - 1].y
                        if (aspectRatio.height / aspectRatio.width < height / width) { aspectRatio = {width, height} }
                        return (
                            <a id='gallery-img-link' target='_blank' href={imageUrl}><img key={imageId} src={imageUrl} /></a>
                        )
                    } else if (imageFullSize) {
                        const imageUrl = helpers.convertHTMLCodes(imageFullSize.u)
                        const width = imageFullSize.u.x
                        const height = imageFullSize.u.y
                        if (aspectRatio.height / aspectRatio.width < height / width) { aspectRatio = {width, height} }
                        return (
                            <a id='gallery-img-link' target='_blank' href={imageUrl}><img key={imageId} src={imageUrl} /></a>
                        )
                    }
                }
            }))
            setGalleryAspectRatio(`${aspectRatio.width} / ${aspectRatio.height}`)
        }
    }, [galleryImages])

    useEffect(() => {
        if (galleryImages) {
            if (currentImageIndex === 0) {
                prevButton.current.style.opacity = '0.3'
                nextButton.current.style.opacity = '1'
            } else if(currentImageIndex === imageElementArray.length -1) {
                prevButton.current.style.opacity = '1'
                nextButton.current.style.opacity = '0.3'
            }   else {
                prevButton.current.style.opacity = '1'
                nextButton.current.style.opacity = '1'
            }
        }
    }, [currentImageIndex])

    const handlePrevButtonClick = () => {
        setCurrentImageIndex((pre) => {
            if (pre > 0) {
                return pre - 1
            }
            return pre
        })
    }

    const handleNextButtonClick = () => {
        setCurrentImageIndex((pre) => {
            if (pre < imageElementArray.length - 1) {
                return pre + 1
            }
            return pre
        })
    }

    return (
        <>
            {singleImageLink || imgurLink
                ?
                    <div className="image-gallery-container">
                        <div className='slides-container'>
                            {singleImageLink && <a className='single-img-link' href={singleImageLink} target="_blank"><img className='single-img' src={singleImageLink} /></a>}
                            {imgurLink && <a href={imgurLink} target="_blank">View on Imgur</a>}
                        </div>
                    </div>
                :
                    <div className="image-gallery-container">
                        <div className="slides-container image-gallery-border" ref={slideContainer} style={{ aspectRatio: galleryAspectRatio}}>
                            {imageElementArray[currentImageIndex]}
                            <div className="numbertext"><span>{`${currentImageIndex + 1} / ${imageElementArray.length}`}</span></div>
                            <a id="prev" ref={prevButton} onClick={handlePrevButtonClick}><span>❮</span></a>
                            <a id="next" ref={nextButton} onClick={handleNextButtonClick}><span>❯</span></a>
                        </div>
                    </div>
            }
        </>
    )
}

export default ImageGallery