import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <div className="main-footer">
          <div className="container">
              <div className="row">
                  {/*Col-1*/}
                  <div className="col-md-3 col-sm-6">
                      <h4>Memory_Makers</h4>
                      <ul className="list-unstyled footer-font">
                          <li>marriage function</li>
                          <li>birthday party</li>
                          <li>college function</li>
                          <li>dj night</li>
                      </ul>
                  </div>

                  {/*Col-2*/}
                  <div className="col-md-3 col-sm-6">
                      <h4>Memory_Makers</h4>
                      <ul className="list-unstyled footer-font">
                          <li>marriage function</li>
                          <li>birthday party</li>
                          <li>college function</li>
                          <li>dj night</li>
                      </ul>
                  </div>

                  {/*Col-3*/}
                  <div className="col-md-3 col-sm-6">
                      <h4>Memory_Makers</h4>
                      <ul className="list-unstyled footer-font">
                          <li>marriage function</li>
                          <li>birthday party</li>
                          <li>college function</li>
                          <li>dj night</li>
                      </ul>
                  </div>
                  
                  {/*Col-4*/}
                  <div className="col-md-3 col-sm-6">
                      <h4>Memory_Makers</h4>
                      <ul className="list-unstyled footer-font">
                          <li>marriage function</li>
                          <li>birthday party</li>
                          <li>college function</li>
                          <li>dj night</li>
                      </ul>
                  </div>

              </div>
              {/*Footer bottom*/}
              <div className="footer-bottom">
                  <p className="text-xs-center">
                      &copy;{new Date().getFullYear()} Memory_Makers - All Rights Reserved

                  </p>
              </div>
          </div>
      </div>
        
    );
}

export default Footer;
