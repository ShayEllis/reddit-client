import './imageGallery.css'

const ImageGallery = (props) => {
    return (
        <div className="container">
            <div className="mySlides" style={{ display: 'block'}}>
                <div className="numbertext">1 / 6</div>
                <img src="https://www.w3schools.com/howto/img_woods_wide.jpg" />
            </div>

            <div className="mySlides">
                <div className="numbertext">2 / 6</div>
                <img src="https://www.w3schools.com/howto/img_5terre_wide.jpg" />
            </div>

            <div className="mySlides">
                <div className="numbertext">3 / 6</div>
                <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
            </div>
                
            <div className="mySlides">
                <div className="numbertext">4 / 6</div>
                <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" />
            </div>

            <div className="mySlides">
                <div className="numbertext">5 / 6</div>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
            </div>
                
            <div className="mySlides">
                <div className="numbertext">6 / 6</div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>
                
            <a id="prev" >❮</a>
            <a id="next" >❯</a>
        </div>
    )
}

export default ImageGallery