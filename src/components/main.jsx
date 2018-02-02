import React from 'react';
import Carousel from './carousel.jsx';
import Marketing from './marketing.jsx';
import Featurettes from './featurettes.jsx';
import Footer from './footer.jsx';

const Main = () => 

	<main role="main">
        <Carousel />
        <div className="container marketing">
          <Marketing />
          <hr className="featurette-divider"/>
          <Featurettes />
          <hr class="featurette-divider"/>
        </div>
        <Footer />
    </main>

export default Main;