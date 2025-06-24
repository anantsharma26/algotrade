import React from "react";
import Button from "../components/Buttons/Button";

const Wiki = () => {
  return (
    <>
      <section className="tab-panel">
        <div className="container">
          <div className="cols-2">
            <div className="sidebar">
              <div className="main-head">
                <h5>CONTENT</h5>
              </div>
              <div className="sidebar-list">
                <ol className="main-list">
                  <li className="has-menu">
                    <a href="#">OVERVIEW</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">INTRODUCTION</a>
                    <ul className="sub-list">
                      <li>
                        <a href="#">Mission</a>
                      </li>
                      <li>
                        <a href="#">Gensis</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-menu">
                    <a href="#">TUTORIALS</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">ALGOO TRADING PLATFORM</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">INVESTMENT PRODUCTS</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">RESOURCES</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">FAQ</a>
                  </li>
                  <li className="has-menu">
                    <a href="#">ADDITIONAL RESOURCES</a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="tab-content">
              <div className="content-head">
                <h5>INTRODUCTION</h5>
              </div>
              <div className="tab-content-part">
                <h4>Mission</h4>
                <p>
                  Our generation has been fortunate to witness a fundamental
                  change in modern economics. Never before fathomed, blockchain
                  technology allows for limitless peer-to-peer value transfer
                  that will reshape the modern investor with limitless
                  opportunities in the crypto space. Algoo Trading's mission is
                  to build an ecosystem of intuitive tools that will allow any
                  investor to generate sustainable passive income during the
                  rise of this new economy.
                </p>
                <div className="navigate-btns">
                  <Button className="border-btn">
                    Previous
                    <span>
                      <img src="/arrow-right-grey.svg" alt="" />
                    </span>
                  </Button>
                  <Button className="border-btn">
                    Next
                    <span>
                      <img src="/arrow-right-grey.svg" alt="" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wiki;
