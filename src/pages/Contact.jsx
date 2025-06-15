import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";

const Contact = () => {
  return (
    <>
      <section className="contact-banner">
        <div className="container">
          <div className="cols-2">
            <div className="bannertxt">
              <div className="head-txt">
                <h1>Get assistance</h1>
                <p>
                  Our Client Care team is online 24/7 to help with your needs.
                </p>
              </div>
              <div className="contact-btns">
                <p>
                  <Link to="/">
                    <img src="/map.svg" />
                    545 Mavis Island, IL 99191
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <img src="/phone.svg" />
                    +2034 4040 3030
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerimg">
          <img src="/contactbg.png" alt="contactbg" />
        </div>
      </section>
      <section className="getintouch">
        <div className="container">
          <div className="col-2">
            <div className="contactimg">
              <img src="/contactimg.jpg" alt="contactimg" />
            </div>
            <div className="contact-form">
              <h3 className="sec-head">Get in Touch</h3>
              <div className="form-box">
                <form action="">
                  <div className="input-fields">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="subject" placeholder="Subject" />
                    <textarea type="message" placeholder="Message" />
                  </div>
                  <Button className="small-round">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
