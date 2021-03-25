import React from 'react';
import "./PhotoGallary.css";

const PhotoGallary = () => {
    return (
        <React.Fragment>
        <div className="container-fluid fnt">
            <div className="row">
                
            {/*******Card-1*******/}

                <div className="box-item col-md-4">
                    <div className="flip-box">
                        <div className="flip-box-front text-center photoimg1 ">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Marriage</h3>
                                <p>We can Visualize, design, materialize and manage almost any event within budget, 
                                   on time and according to brief.</p>
                                   <div className="flip-box-img"></div>
                            </div>
                        </div>
                        <div className="flip-box-back text-center photoimg1">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Memory</h3>
                                <p>MEMORY_MAKERS has the best craftsmen and technicians like event theme designers, 
                                    event fabricators, event.</p>
                                   <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*******Card-2*******/}
                <div className="box-item col-md-4">
                    <div className="flip-box">
                        <div className="flip-box-front text-center photoimg2 ">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Marriage</h3>
                                <p>We can Visualize, design, materialize and manage almost any event within budget, 
                                   on time and according to brief.</p>
                                   <div className="flip-box-img"></div>
                            </div>
                        </div>
                        <div className="flip-box-back text-center photoimg2">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Birthday</h3>
                                <p> We cater to the needs of the corporate and private clients all over India, 
                                    ranging across a industries and market segments.</p>
                                   <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*******Card-3*******/}
                <div className="box-item col-md-4">
                    <div className="flip-box">
                        <div className="flip-box-front text-center photoimg3 ">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Marriage</h3>
                                <p>We can Visualize, design, materialize and manage almost any event within budget, 
                                   on time and according to brief.</p>
                                   <div className="flip-box-img"></div>
                            </div>
                        </div>
                        <div className="flip-box-back text-center photoimg3">
                            <div className="inner color-white">
                                <h3 className="flip-box-header">Destination</h3>
                                <p>destination weddings in India and across the world,
                                    destinations and making travel and accommodation arrangements,</p>
                                   <button className="flip-box-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        


        {/*****COL IMAGES***** */}
    <div className="gallarybg">
        <h1 className="text-center galheading">Marriage</h1>
        {/*****ROW 1***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="galimg1">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg2">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg3">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg4">
                </div>
            </div>
        </div>
        {/*****ROW 2***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="galimg5">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg6">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg7">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg8">
                </div>
            </div>
        </div>
        {/*****ROW 3***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="galimg9">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg10">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg11">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg12">
                </div>
            </div>
        </div>

         {/*****ROW 4***** */}
    
         <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="galimg13">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg14">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg15">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="galimg16">
                </div>
            </div>
        </div>
   
        {/*****BIRTHDAY ROW 1***** */}
        <h1 className="text-center galheading">BIRTHDAY</h1>
        <div className="row gal-img-padding">
            
            <div className="col-sm-3 p-4">
                <div className="birthimg1">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg2">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg3">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg4">
                </div>
            </div>
        
        </div>

        {/*****BIRTHDAY ROW 2***** */}
        <div className="row gal-img-padding">
           
            <div className="col-sm-3 p-4">
                <div className="birthimg5">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg6">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg7">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg8">
                </div>
            </div>

        </div>

         {/*****BIRTHDAY ROW 3***** */}
         <div className="row gal-img-padding">
            
            <div className="col-sm-3 p-4">
                <div className="birthimg9">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg10">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg11">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="birthimg12">
                </div>
            </div>

        </div>

    {/*****BIRTHDAY ROW 1***** */}
        <h1 className="text-center galheading">Baby Shower</h1>
        {/*****ROW 1***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="baby1">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby2">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby3">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby4">
                </div>
            </div>
        </div>

        {/*****ROW 2***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="baby5">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby6">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby7">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby8">
                </div>
            </div>
        </div>

        {/*****ROW 3***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="baby9">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby10">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby11">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby12">
                </div>
            </div>
        </div>

        {/*****ROW 4***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="baby13">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby14">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby15">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby16">
                </div>
            </div>
        </div>

        {/*****ROW 5***** */}
        <div className="row gal-img-padding">
            <div className="col-sm-3 p-4">
                <div className="baby17">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby18">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby19">
                </div>
            </div>
            <div className="col-sm-3 p-4">
                <div className="baby20">
                </div>
            </div>
        </div>


    </div>
    </div>
        </React.Fragment>
    );
}

export default PhotoGallary;
