import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-txt">
              <h5 className="sub-head">Welcome to our algootrading</h5>
              <h1>
                Best <span>algorithmic strategies</span> for digital asset
                management
              </h1>
              <p>
                Algoo trading offers this algorithmic trading strategy and other
                asset management tools through a decentralized organization, as
                all their projects run on the ERC-20 block-chain.
              </p>
              <div className="hero-btns">
                <Button className="bannerbtn-black">View Strategies</Button>
                <Button className="bannerbtn">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="coreinvert">
        <div className="container">
          <div className="invest-inner">
            <h3 className="sec-head white">
              Core investments offered by Algootrading
            </h3>
            <div className="feature-list">
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/feature01.png" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Fixed Yields Strategies</h4>
                  <p>
                    The fundamental strategy of Algoo's platform allows for
                    investors to earn a fixed yield on core crypto assets
                  </p>
                </div>
              </div>
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/feature02.png" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Dynamic Yields Strategies</h4>
                  <p>
                    A newly-implemented strategy offering dynamic yields subject
                    to market conditions
                  </p>
                  <Button className="featurebtn">coming soon</Button>
                </div>
              </div>
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/feature03.png" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Yield Automated Portfolio</h4>
                  <p>
                    A strategy which allows clients to hold a basket of crypto
                    assets within a single share while generating yield on top
                    of that share.
                  </p>
                  <Button className="featurebtn">coming soon</Button>
                </div>
              </div>
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/feature04.png" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>CeDeFi Strategies</h4>
                  <p>
                    Strategies with variable risk-reward levels built from
                    algorithmic tools utilizing the infrastructures of both DeFi
                    and CeFi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="keysevice">
        <div className="container">
          <div className="heading-block">
            <h3 className="sec-head">Key Services</h3>
            <p>
              Enjoy lower fees and exclusive rewards when you purchase from the
              primary market
            </p>
          </div>
          <div className="service-row">
            <div className="service-container">
              <div className="service-block">
                <h3>Licensed</h3>
                <p>
                  Licensed, fully regulated institution. Available for EU&US
                  customers.
                </p>
              </div>
              <div className="service-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="service-container">
              <div className="service-block">
                <h3>Protected</h3>
                <p>Customer's funds are protected by Us</p>
              </div>
              <div className="service-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="service-container">
              <div className="service-block">
                <h3>Transparent</h3>
                <p>
                  Quarterly Investment Reports provide transparency in how
                  Algootrading generates yield
                </p>
              </div>
              <div className="service-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="service-container">
              <div className="service-block">
                <h3>Teams</h3>
                <p>
                  A team of 50 associates, including a robust, 25-member
                  investment department
                </p>
              </div>
              <div className="service-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="about-head">
            <div className="cols2">
              <div className="headbox">
                <h3 className="sec-head">
                  About <span>Algootrading</span>
                </h3>
                <p>
                  We launched in 2022 with a vision to make advanced crypto
                  trading solutions accessible to the average trader.With
                  AlgooTrading, in a few clicks almost anyone can adopt and
                  install automated crypto trading strategies that work. Whether
                  you are a beginner wanting to day trade, or if your hedge fund
                  is interested in generating Alpha through sophisticated
                  high-frequency strategies, we know the language.
                </p>
              </div>
              <div className="headimg">
                <img src="aboutimg.png" alt="aboutimg" />
              </div>
            </div>
          </div>
          <div className="about-features">
            <div className="ab-featurebox">
              <h3>Dedication</h3>
              <p>
                We are committed to excellence, ensuring each strategy is
                designed and optimized for maximum performance in a volatile
                market. Our dedication to precision and innovation allows our
                clients to stay ahead in the world of decentralized finance.
              </p>
            </div>
            <div className="ab-featurebox">
              <h3>Sustainability</h3>
              <p>
                Our investment strategies prioritize long-term growth while
                adhering to environmental and social responsibility. We focus on
                building sustainable portfolios that align with the future of
                blockchain and decentralized ecosystems.
              </p>
            </div>
            <div className="ab-featurebox">
              <h3>Dedication</h3>
              <p>
                Seamlessly bridging the gap between centralized and
                decentralized finance, our platform integrates advanced tools
                and analytics to create a cohesive ecosystem. With us, you can
                leverage the best of both worlds for unparalleled growth
                opportunities.
              </p>
            </div>
            <div className="ab-featurebox">
              <h3>Dedication</h3>
              <p>
                Our team of experts is available 24/7 to provide personalized
                guidance and solutions. From onboarding to strategy
                optimization, we ensure our client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="high-roi">
        <div className="container">
          <div className="roi-head">
            <h3 className="sec-head">High ROI CeDeFi Strategies</h3>
            <p>
              Strategies with variable risk-reward levels, powered by
              algorithmic tools utilizing select DeFi protocols
            </p>
          </div>
          <div className="roi-list">
            <div className="roi-box">
              <div className="roibox-head">
                <img src="/pendle.svg" alt="" className="icon" />
                <h4>Pendle ETHIndex</h4>
              </div>
              <div className="roi-info">
                <div className="expected-roi">
                  <h5>Expected 1y ROI</h5>
                  <p>175.7%</p>
                </div>
                <div className="extra-info">
                  <div className="manager">
                    <h5>Manager</h5>
                    <p>Algoo Trading</p>
                  </div>
                  <div className="risk-level">
                    <h5>Risk Level</h5>
                    <p>2/3</p>
                  </div>
                  <div className="wallet">
                    <div className="wallet-btn">
                      <img src="/wallet.svg" alt="" />
                      <p>Strategy Wallet</p>
                    </div>
                  </div>
                  <div className="trade-start">
                    <Button className="small-round">Trade</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="roi-box">
              <div className="roibox-head">
                <img src="/pendle.svg" alt="" className="icon" />
                <h4>Pendle ETHIndex</h4>
              </div>
              <div className="roi-info">
                <div className="expected-roi">
                  <h5>Expected 1y ROI</h5>
                  <p>175.7%</p>
                </div>
                <div className="extra-info">
                  <div className="manager">
                    <h5>Manager</h5>
                    <p>Algoo Trading</p>
                  </div>
                  <div className="risk-level">
                    <h5>Risk Level</h5>
                    <p>2/3</p>
                  </div>
                  <div className="wallet">
                    <div className="wallet-btn">
                      <img src="/wallet.svg" alt="" />
                      <p>Strategy Wallet</p>
                    </div>
                  </div>
                  <div className="trade-start">
                    <Button className="small-round">Trade</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="roi-box">
              <div className="roibox-head">
                <img src="/pendle.svg" alt="" className="icon" />
                <h4>Pendle ETHIndex</h4>
              </div>
              <div className="roi-info">
                <div className="expected-roi">
                  <h5>Expected 1y ROI</h5>
                  <p>175.7%</p>
                </div>
                <div className="extra-info">
                  <div className="manager">
                    <h5>Manager</h5>
                    <p>Algoo Trading</p>
                  </div>
                  <div className="risk-level">
                    <h5>Risk Level</h5>
                    <p>2/3</p>
                  </div>
                  <div className="wallet">
                    <div className="wallet-btn">
                      <img src="/wallet.svg" alt="" />
                      <p>Strategy Wallet</p>
                    </div>
                  </div>
                  <div className="trade-start">
                    <Button className="small-round">Trade</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="roi-box">
              <div className="roibox-head">
                <img src="/pendle.svg" alt="" className="icon" />
                <h4>Pendle ETHIndex</h4>
              </div>
              <div className="roi-info">
                <div className="expected-roi">
                  <h5>Expected 1y ROI</h5>
                  <p>175.7%</p>
                </div>
                <div className="extra-info">
                  <div className="manager">
                    <h5>Manager</h5>
                    <p>Algoo Trading</p>
                  </div>
                  <div className="risk-level">
                    <h5>Risk Level</h5>
                    <p>2/3</p>
                  </div>
                  <div className="wallet">
                    <div className="wallet-btn">
                      <img src="/wallet.svg" alt="" />
                      <p>Strategy Wallet</p>
                    </div>
                  </div>
                  <div className="trade-start">
                    <Button className="small-round">Trade</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="roi-box">
              <div className="roibox-head">
                <img src="/pendle.svg" alt="" className="icon" />
                <h4>Pendle ETHIndex</h4>
              </div>
              <div className="roi-info">
                <div className="expected-roi">
                  <h5>Expected 1y ROI</h5>
                  <p>175.7%</p>
                </div>
                <div className="extra-info">
                  <div className="manager">
                    <h5>Manager</h5>
                    <p>Algoo Trading</p>
                  </div>
                  <div className="risk-level">
                    <h5>Risk Level</h5>
                    <p>2/3</p>
                  </div>
                  <div className="wallet">
                    <div className="wallet-btn">
                      <img src="/wallet.svg" alt="" />
                      <p>Strategy Wallet</p>
                    </div>
                  </div>
                  <div className="trade-start">
                    <Button className="small-round">Trade</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="passive-income">
        <div className="container">
          <div className="headbox">
            <div className="heading">
              <h3 className="sec-head">
                A crypto community focused on building wealth through passive
                income
              </h3>
            </div>
            <div className="head-txt">
              <p>
                From the beginning, Algoo Trading has laser focused on building
                easy-to-use trading and portfolio management tools for crypto
                traders of any skill level. From making a simple buy to setting
                up advanced trading strategies, Algoo Trading traders can
                confidently manage and grow their digital wealth across their
                favorite exchanges and wallets.
              </p>
              <Button className="small-round">About Us</Button>
            </div>
          </div>
          <div className="income-list">
            <div className="income-box">
              <h4>$160M+</h4>
              <p>Assets under management</p>
            </div>
            <div className="income-box">
              <h4>8000+</h4>
              <p>Active investors earning daily yield</p>
            </div>
            <div className="income-box">
              <h4>$12M+</h4>
              <p>Paid out to customers</p>
            </div>
            <div className="income-box">
              <h4>Over 20</h4>
              <p>Pools available to invest.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-partner">
        <div className="container">
          <h3 className="mid-head white">Our Parterns</h3>
          <div className="partner-list">
            <img src="/highland.png" alt="partner1" />
            <img src="/coinbase.png" alt="partner2" />
            <img src="/third-point.png" alt="partner3" />
            <img src="/coinbase.png" alt="partner4" />
            <img src="/electric-capital.png" alt="partner5" />
            <img src="/third-point.png" alt="partner3" />
            <img src="/electric-capital.png" alt="partner5" />
          </div>
        </div>
      </section>
      <section className="performance">
        <div className="container">
          <h3 className="sec-head white">Performance Metrics</h3>
          <div className="performance-list">
            <div className="performance-box">
              <div className="performance-inner">
                <div className="coin-title">
                  <div className="coin-icon">
                    <img src="/bit-coin.svg" alt="bitcoin" />
                    <p className="name-code">BTC</p>
                    <p className="name">BITCOIN</p>
                  </div>
                  <div className="checkout-coinbtn">
                    <img src="/arrow-right.svg" alt="arrowright" />
                  </div>
                </div>
                <div className="coin-info">
                  <div className="coin-price">
                    <h5>$56,623.54</h5>
                    <p>1.41%</p>
                  </div>
                  <div className="coin-graph">
                    <img src="/coin-graph.svg" alt="graph" />
                  </div>
                </div>
              </div>
            </div>
            <div className="performance-box">
              <div className="performance-inner">
                <div className="coin-title">
                  <div className="coin-icon">
                    <img src="/ethereum.svg" alt="bitcoin" />
                    <p className="name-code">ETH</p>
                    <p className="name">ETHEREUM</p>
                  </div>
                  <div className="checkout-coinbtn">
                    <img src="/arrow-right.svg" alt="arrowright" />
                  </div>
                </div>
                <div className="coin-info">
                  <div className="coin-price">
                    <h5>$4,267.90</h5>
                    <p>2.22%</p>
                  </div>
                  <div className="coin-graph">
                    <img src="/coin-graph.svg" alt="graph" />
                  </div>
                </div>
              </div>
            </div>
            <div className="performance-box">
              <div className="performance-inner">
                <div className="coin-title">
                  <div className="coin-icon">
                    <img src="/bnb.svg" alt="bitcoin" />
                    <p className="name-code">BNB</p>
                    <p className="name">BINANCE</p>
                  </div>
                  <div className="checkout-coinbtn">
                    <img src="/arrow-right.svg" alt="arrowright" />
                  </div>
                </div>
                <div className="coin-info">
                  <div className="coin-price">
                    <h5>$587.74</h5>
                    <p>0.82%</p>
                  </div>
                  <div className="coin-graph">
                    <img src="/coin-graph.svg" alt="graph" />
                  </div>
                </div>
              </div>
            </div>
            <div className="performance-box">
              <div className="performance-inner">
                <div className="coin-title">
                  <div className="coin-icon">
                    <img src="/ustd.svg" alt="bitcoin" />
                    <p className="name-code">USDT</p>
                    <p className="name">TETHER</p>
                  </div>
                  <div className="checkout-coinbtn">
                    <img src="/arrow-right.svg" alt="arrowright" />
                  </div>
                </div>
                <div className="coin-info">
                  <div className="coin-price">
                    <h5>$0.9998</h5>
                    <p>0,03%</p>
                  </div>
                  <div className="coin-graph">
                    <img src="/coin-graph.svg" alt="graph" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trustpilot">
        <div className="container">
          <div className="reviews-list">
            <div className="review-head">
              <h3>
                <span>
                  <img src="/star.svg" alt="" />
                </span>
                Trustpilot
              </h3>
              <div className="trusted-rating">
                <p className="rating">Excellent</p>
                <p className="stars">
                  <span>
                    <img src="/star-white.svg" alt="star" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="star" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="star" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="star" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="star" />
                  </span>
                </p>
                <p className="count">
                  <span>436</span> reviews on
                </p>
              </div>
            </div>
            <div className="review-box">
              <span className="review-time">A day ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar01.png" alt="" />
                </div>
                <div className="reviews">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Emily Carte</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">Two days ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar02.png" alt="" />
                </div>
                <div className="reviews rate3">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Liam Bennett</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">Ten hours ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar03.png" alt="" />
                </div>
                <div className="reviews">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Ethan Foster</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">2 months ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar04.png" alt="" />
                </div>
                <div className="reviews rate2">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Olivia Brooks</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">A week ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar05.png" alt="" />
                </div>
                <div className="reviews rate45">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Ava Collins</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">Three days ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar06.png" alt="" />
                </div>
                <div className="reviews">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Noah Hayes</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
            <div className="review-box">
              <span className="review-time">One hour ago</span>
              <div className="review-client">
                <div className="review-avtar">
                  <img src="avatar07.png" alt="" />
                </div>
                <div className="reviews rate4">
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                  <span>
                    <img src="/star-white.svg" alt="" />
                  </span>
                </div>
              </div>
              <h4 className="client-name">Isabella Reed</h4>
              <p>
                “Super lovely product. I love this product because the software
                is brilliantly helpful. Can’t get enough! ...”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
