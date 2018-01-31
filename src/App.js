import React, { Component } from 'react';
import {Grid, Jumbotron, Nav, Navbar, NavItem} from 'react-bootstrap';
const logo = require('./images/FullSizeRender.jpg');

class App extends Component {
  render() {
    return (
    <div> 
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} height={50}></img>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Shop
          </NavItem>
          <NavItem eventKey={2} href="#">
            Blog
          </NavItem>
        </Nav>
      </Navbar>;

      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Dee's Wax</h1>
          <p className="lead">Sugar wax to get hair off backs.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary">Lights. Camera. WAXtion.</a>
          </p>
        </main>

       
      </div> 
    </div>    
    );
  }
}

export default App;
