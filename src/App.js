import React, { Component } from 'react';
const logo = require('./images/FullSizeRender.jpg');
const centerDrip = require('./images/pexels-photo-315420.jpeg');
const leftDrip = require('./images/pexels-photo-714522.jpeg');
const menu = require('./images/menu-white.png');

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><img className="menu-icon" src={menu} alt="menu icon" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>          
          </div>
        </nav>
      </header>

      <main role="main">

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="first-slide" src={centerDrip} alt="First slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Dee's Wax</h1>
                  <p>The sweet way to make that fuzz dissapp-HAIR.</p>
                  <p><a className="btn btn-lg btn-outline-light" href="#" role="button">Learn more</a></p>
                </div>
              </div>            
            </div>
            <div className="carousel-item">
              <img className="second-slide" src={leftDrip} alt="Second slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sugar Wax</h1>
                  <p>Leaving you silky smooth after that hair is removed.</p>
                  <p><a className="btn btn-lg btn-outline-light" href="#" role="button">Learn more</a></p>
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


       {/* <!-- Marketing messaging and featurettes
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->
*/}
        <div className="container marketing">

{/*          <!-- Three columns of text below the carousel -->
*/}          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src={logo} alt="Generic placeholder image" width="140" height="140" />
              <h2>Wax</h2>
              <p>Wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>{/*<!-- /.col-lg-4 -->*/}
            <div className="col-lg-4">
              <img className="rounded-circle" src={logo} alt="Generic placeholder image" width="140" height="140" />
              <h2>Sugar</h2>
              <p>Sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>{/*<!-- /.col-lg-4 -->*/}
            <div className="col-lg-4">
              <img className="rounded-circle" src={logo} alt="Generic placeholder image" width="140" height="140" />
              <h2>Hair</h2>
              <p>Hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>{/*<!-- /.col-lg-4 -->*/}
          </div>{/*<!-- /.row -->*/}


        {/*  <!-- START THE FEATURETTES -->*/}

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Treat yourself.<span className="text-muted">You deserve it.</span></h2>
              <p className="lead">Roses are red. Violets are blue. What's better than prickly legs? Legs that are smooth.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={leftDrip} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Hate to burst your bubble. <span class="text-muted">We can see that stubble.</span></h2>
            <p class="lead">Bubblegum bubblegum in a dish.  Silky smoothness is your wish?  That we can accomplish.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src={centerDrip} alt="Generic placeholder image" />
          </div>
        </div>

        <hr class="featurette-divider"/>

     {/* FOOTER  */}
        <footer className="container">
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
        </div>{/*<!-- /.container -->*/}

      </main>
      </div>
    );
  }
}

export default App;
