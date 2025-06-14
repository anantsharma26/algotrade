import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-handles">
          <div className="social-row">
            <div className="social-box">
              <img src="/twitter.svg" alt="twitter" />
              <div className="social-info">
                <h4>Sign up to date</h4>
                <p>
                  We’d love to stay connected with you, If the feeling’s mutual,
                  follow us on Twitter for the latest news and updates.
                </p>
              </div>
            </div>
            <div className="social-box">
              <img src="/linkedin.svg" alt="twitter" />
              <div className="social-info">
                <h4>Help shape the product</h4>
                <p>
                  Become part of our community and seize the opportunity to earn
                  passive income through top smart contracts. Join us today!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="ftlink">
            <h5>Resources</h5>
            <ul>
              <li>Blog</li>
              <li>Wiki</li>
              <li>Whitepaper</li>
              <li>Affiliate Program</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="ftlink second">
            <h5>Help</h5>
            <ul>
              <li>Contact us</li>
              <li>Mail</li>
              <li>KYC</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="ftlink third">
            <h5>Products</h5>
            <ul>
              <li>Fixed Yield Strategies</li>
              <li>CeDefi Strategies</li>
            </ul>
          </div>
          <div className="ftlink forth">
            <h5>Socials</h5>
            <ul>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className="ft-logo">
          <a href="#">
            <img src="/ftlogo.svg" alt="ftlogo" />
          </a>
        </div>
        <div className="newsletter">
          <div className="newsletter-inner">
            <h5>Join to get free updates every week.</h5>
            <div className="email-box">
              <input type="email" placeholder="Email Address" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
        <div className="copyright-box">
          <p>©2024 Algootrading</p>
          <p>All Rights Reserved</p>
          <p>Privacy Policy I Terms Of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
