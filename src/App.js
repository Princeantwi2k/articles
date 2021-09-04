import React, { Component } from 'react';
import Homepage from './Component/Homepage';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
        <Route path="/home" exact component={Homepage} />
        </BrowserRouter>
     
      </div>
    );
  }
}

export default App;

