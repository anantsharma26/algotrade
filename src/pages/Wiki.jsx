import React from "react";
import Button from "../components/Buttons/Button";
import Sidebar from "../components/Sidebar/sidebar";

const Wiki = () => {
  return (
    <>
      <section className="tab-panel">
        <div className="container">
          <div className="cols-2">
            <Sidebar activeTab={"mission"} />
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
