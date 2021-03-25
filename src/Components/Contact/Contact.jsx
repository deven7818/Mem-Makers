import React from 'react';
import "./Contact.css";


const Contact = () => {
    return (
        <section className="get_in_touch">
            <h1 className="title"> get in touch</h1>
            <div className="container">
                <div className="contact-form row">
                    <div className="row">
                    <div className="form-field col-lg-4">
                        <input id="name" className="input-text" type="text" name=""/>
                        <label for="name" className="label">name</label>
                    </div>
                    <div className="form-field col-lg-4">
                        <input id="email" className="input-text" type="email" name=""/>
                        <label type="email" className="label">email</label>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="form-field col-lg-4">
                        <input id="company" className="input-text" type="text" name=""/>
                        <label for="company" className="label">company name</label>
                    </div>
                    <div className="form-field col-lg-4">
                        <input id="phone" className="input-text" type="text" name=""/>
                        <label for="phone" className="label">contact number</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-field col-lg-8">
                        <input id="message" className="input-text" type="text" name=""/>
                        <label for="message" className="label">message</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input className="submit-btn" type="submit" value="submit" name=""/>
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;
