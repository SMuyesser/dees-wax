import React from 'react';
import Carousel from './carousel.jsx';
import Marketing from './marketing.jsx';
import './main.css';
const armpit = require('../images/IMG950282.jpg');
const waxing = require('../images/IMG958330.jpg');

const Main = () => 

	<main role="main">

        <Carousel />

        <div className="container marketing">
          <Marketing />
          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Treat yourself.<span className="text-muted">You deserve it.</span></h2>
              <p className="lead">Roses are red. Violets are blue. What's better than prickly legs? Legs that are smooth.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto featurette-border-radius" src={armpit} alt="Generic placeholder" />
            </div>
          </div>

          <hr className="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Hate to burst your bubble. <span class="text-muted">We can see that stubble.</span></h2>
            <p class="lead">Bubblegum bubblegum in a dish.  Silky smoothness is your wish?  That we can accomplish.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto featurette-border-radius" src={waxing} alt="Generic placeholder" />
          </div>
        </div>

        <hr class="featurette-divider"/>

        <footer className="container">
          <p className="float-right"><a href="">Back to top</a></p>
          <p>&copy; 2017-2018 Dee's Wax &middot; <a href="">Privacy</a> &middot; <a href="">Terms</a></p>
        </footer>
        </div>{/*<!-- /.container -->*/}

    </main>

export default Main;