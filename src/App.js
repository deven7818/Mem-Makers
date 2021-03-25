import React from "react";
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar/NavbarDemo";
import About from "./Components/About/About";
import Destination from "./Components/Destination";
import Gallary from "./Components/Gallary";
import Clients from "./Clients/Clients";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Contact from "./Components/Contact/Contact";
import SerivceDetails from "./Components/ServiceDetails/ServiceDetails";
import PhotoGallary from "./Components/PhotoGallary/PhotoGallary";



function App() {
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={About} /> 
            <Route exact path="/destination" component={Destination} /> 
            <Route exact path="/gallary" component={Gallary} /> 
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/serivceDetails" component={SerivceDetails} />
            <Route exact path="/photogallary" component={PhotoGallary} />
          </Switch>
          <Footer/>
      </Router>
    );
}

export default App;
