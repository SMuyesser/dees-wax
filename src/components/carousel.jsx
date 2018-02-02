import React from 'react';
import './carousel.css';
const centerDrip = require('../images/cropped-center-drip.jpg');
const leftDrip = require('../images/cropped-left-drip.jpg');
const collage = require('../images/collage.jpg');

const Carousel = () => 
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide mx-auto d-block" src={collage} alt="First slide" />           
        </div>
        <div className="carousel-item">
          <img className="second-slide mx-auto d-block" src={centerDrip} alt="First slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Dee's Wax</h1>
              <p>The sweet way to make that fuzz dissapp-HAIR.</p>
              <p><a className="btn btn-lg btn-outline-dark" href="javascript" role="button">Learn more</a></p>
            </div>
          </div>            
        </div>
        <div className="carousel-item">
          <img className="third-slide mx-auto d-block" src={leftDrip} alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Sugar Wax</h1>
              <p>Leaving you silky smooth after that hair is removed.</p>
              <p><a className="btn btn-lg btn-outline-dark" href="javascript" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    export default Carousel;