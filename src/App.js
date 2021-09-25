import React from 'react';
import Magazen from './Component/Magazen';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Nav from './Component/Nav'
import Sport from './Component/Sport';
import Tech from './Component/Tech';
import Science from './Component/Science';
import Politics from './Component/Politics';
import Business from './Component/Business';
import Footer from './Component/Footer';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
 <Switch>
   <Route path="/" exact component={Magazen} />
   <Route path="/sport" component={Sport} />
   <Route path="/tech" component={Tech} />
   <Route path="/science" component={Science} />
   <Route path="/poli" component={Politics} />
   <Route path="/business" component={Business} />
 </Switch>
 <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;

