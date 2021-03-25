import React from 'react';
import PhotoGallary from "../Components/PhotoGallary/PhotoGallary";

const Gallary = () => {
    return (
        <React.Fragment>
        <div className="gallary">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="gallary__img">
                        </div>
                    </div>
                    <div className="col-sm p-25">
                        <h3>GALLARY</h3>
                        <h1>MEMORY_MAKERS - FOR EXTRAORDINARY EVENTS</h1>
                        <p>We can Visualize, design, materialize and manage almost any event within budget,
                            on time and according to brief. MEMORY_MAKERS has the best craftsmen and technicians like
                            event theme designers, event fabricators, event sculptors, event carpenters, event lighting,
                            audio-visuals, and sound gurus, as well as an experienced wedding &
                            corporate event management team to implement and execute each and every event with perfection.
                            We cater to the needs of the corporate and private clients all over India,
                            ranging across a multitude of industries and market segments.
                        </p>
                        <div className="gallary__btn">
                            <a href="/photogallary" className="btn btn-smart">
                                GALLARY
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        </React.Fragment>
    );
}

export default Gallary;
