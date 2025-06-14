import React from "react";
import Button from "../components/Buttons/Button";

const Blog = () => {
  return (
    <>
      <section className="hero blog">
        <div className="container">
          <div className="hero-inner">
            <div className="cols-2">
              <div className="hero-txt">
                <h1>
                  A Detailed Guide on How to Read Candlesticks in Crypto Trading
                </h1>
                <p>
                  Learn how to read candlesticks in crypto trading to identify
                  market trends, patterns, and opportunities, helping you make
                  informed decisions in volatile markets.
                </p>
                <div className="hero-btns">
                  <Button className="bannerbtn">Continue Reading</Button>
                </div>
              </div>
              <div className="hero-banner">
                <img src="/blog-banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container">
          <div className="col-2">
            <div className="subscribe-head">
              <img src="/email.svg" alt="" />
              <h4>Subscribe to our crypto news weekly newsletter!</h4>
            </div>
            <div className="subscribe-box">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" />
            </div>
          </div>
        </div>
      </section>
      <section className="today-headline">
        <div className="container"></div>
      </section>
    </>
  );
};

export default Blog;
