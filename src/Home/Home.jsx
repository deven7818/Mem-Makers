import React from 'react';
import "./Home.css";
import About from "../Components/About/About";
import Destination from "../Components/Destination";
import Gallary from "../Components/Gallary";
import Clients from "../Clients/Clients";
import SerivceDetails from "../Components/ServiceDetails/ServiceDetails";

const Home = () => {
    return (
        <React.Fragment>
        <div>
            <header>
                <div className="container">
                    <div className="banner-text">
                        <div className="text-area">
                            <span>M</span>
                            <span>E</span>
                            <span>M</span>
                            <span>O</span>
                            <span>R</span>
                            <span>Y</span>
                            <span>_</span>
                            <span>M</span>
                            <span>A</span>
                            <span>K</span>
                            <span>E</span>
                            <span>R</span>
                            <span>S</span>
                        </div>
                        <p className="" data-aos="zoom-in-up">Let's Create Memory Together</p>                       
                    </div>
                </div>
            </header>

        </div>
        <About/>
        <Destination/>
        <Gallary/>
        <Clients/>
        <SerivceDetails/>
    </React.Fragment>        
    )
}

export default Home;
