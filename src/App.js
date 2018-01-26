import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>My New React App</h1>
            <p>
              Just the beginning of the journey
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
