import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
class App extends Component {
  render() {
    return(
      <div>
      <Titles/>
      <Form/>
      </div>
    );
  }
}

export default App;
