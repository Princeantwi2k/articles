import React, { Component } from 'react';
import Homepage from './Component/Homepage';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Favorite from './Component/Favorite'
import Nav from './Component/Nav';
import Blog from './Component/Blog';
import Blog1 from './Component/Blog1';
import TopMovies from './Component/TopMovies';
import Blog2 from './Component/Blog2';
class App extends Component {
  render() {
    return (
      <>
      <Container>
     
      <BrowserRouter>
      <Nav />
       <Switch>
         <Route path="/" exact component={Homepage} />
         <Route path="/favorite" component={Favorite} />
         <Route path ="/top" component={TopMovies} />
         <Route path="/blog2/:id" component={Blog2} />
         <Route path="/blog/:id" component={Blog} />
         <Route path="/blog1/:id" component={Blog1} />
       </Switch>
    
        
       </BrowserRouter>
      </Container>
      
      
          
   
       
       
     
      </>
    );
  }
}

export default App;

