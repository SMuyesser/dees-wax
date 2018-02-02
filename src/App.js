import React, { Component } from 'react';
import Header from './components/header.jsx';
import Main from './components/main.jsx';

class App extends Component {
  render() {
    return (

      <div id='root'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
