import React from "react";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";

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
      <section className="headline">
        <div className="container">
          <h3 className="headline-head">Today’s Headlines</h3>
          <div className="similar-blog-list">
            <div className="blog-box">
              <div className="imgbox">
                <img src="/blogimg1.jpg" alt="" />
              </div>
              <div className="blog-txt">
                <div className="blog-desc-head">
                  <h5>Ethereum Validator Waitlist Reaches...</h5>
                  <p className="date">12 Feb 2024 8:00 AM</p>
                </div>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="imgbox">
                <img src="/shiba.jpg" alt="" />
              </div>
              <div className="blog-txt">
                <div className="blog-desc-head">
                  <h5>Shiba Inu's Shibarium Sees Significant...</h5>
                  <p className="date">12 Feb 2024 8:00 AM</p>
                </div>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="imgbox">
                <img src="/gas.jpg" alt="" />
              </div>
              <div className="blog-txt">
                <div className="blog-desc-head">
                  <h5>Ethereum Gas Fees Soar to 8-Month...</h5>
                  <p className="date">12 Feb 2024 8:00 AM</p>
                </div>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-listing">
        <div className="container">
          <div className="blog-category-list">
            <ul>
              <li>
                <Link to="/" className="active">
                  All
                </Link>
              </li>
              <li>
                <Link to="/">Latest CryptoTrade News</Link>
              </li>
              <li>
                <Link to="/">Market</Link>
              </li>
              <li>
                <Link to="/">Bitcoin</Link>
              </li>
              <li>
                <Link to="/">Regulation</Link>
              </li>
              <li>
                <Link to="/">DeFi</Link>
              </li>
            </ul>
          </div>
          <div className="date">
            <p>
              <span>
                <img src="/calender.svg" alt="" />
              </span>
              Today
            </p>
          </div>
          <div className="blog-listing-main">
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog1.jpg" alt="blog1" />
              </div>
              <div className="blog-detail">
                <h4>Bitcoin Passes $50,000 For The First Time Since 2021</h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  Bitcoin’s price has returned to late 2021 levels, with a $1
                  trillion market cap now in sight.
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog2.jpg" alt="blog2" />
              </div>
              <div className="blog-detail">
                <h4>
                  New Project Marks Milestone for Avangrid and Amazon, AGR Up
                  11% Premarket
                </h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  Avangrid and Amazon have taken a significant leap in renewable
                  energy with the launch a 98.4 MW wind
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog3.jpg" alt="blog3" />
              </div>
              <div className="blog-detail">
                <h4>
                  Aptos (APT) Price Prediction 2025, 2026, 2027, 2028, 2029 and
                  2030
                </h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  In this article, we aim to provide an in-depth analysis and
                  prediction of the future price of Aptos (APT). We
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog4.jpg" alt="blog4" />
              </div>
              <div className="blog-detail">
                <h4>
                  Injective (INJ) Price Prediction 2025, 2026, 2027, 2028, 2029
                  and 2030
                </h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  In this article, we aim to provide an insightful forecast
                  about the potential future price of Injective (INJ). Our
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog5.jpg" alt="blog5" />
              </div>
              <div className="blog-detail">
                <h4>
                  Stellar (XLM) Price Prediction 2025, 2026, 2027, 2028, 2029
                  and 2030
                </h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  In this article, we will delve into the world of Stellar (XLM)
                  price prediction, aiming to provide you with an
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
            <div className="blog-box-main">
              <div className="imgbox">
                <img src="/blog6.jpg" alt="blog6" />
              </div>
              <div className="blog-detail">
                <h4>Bitcoin Breaks Above $50,000 in Stunning Comeback</h4>
                <p className="blog-date">12 Feb 2024 10:00 AM</p>
                <p>
                  Bitcoin, the leading digital currency, has recently exceeded
                  the $50,000 threshold for the first time since December 2021,
                  marking a significant r...
                </p>
                <Link to="/" className="readbtn">
                  Continue Reading...
                </Link>
                <div className="blog-category">
                  <Button className="shadow-btn">Cryptocurrency</Button>
                  <Button className="shadow-btn">Business New</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
