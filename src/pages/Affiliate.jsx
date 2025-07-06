import React from "react";
import Button from "../components/Buttons/Button";
import Sidebar from "../components/Sidebar/sidebar";

const Affiliate = () => {
  return (
    <>
      <section className="tab-panel">
        <div className="container">
          <div className="cols-2">
            <Sidebar activeTab={"mission"} />
            <div className="tab-content">
              <div className="content-head">
                <h5>ALGOO TRADING PLATFORM</h5>
              </div>
              <div className="tab-content-part">
                <h4>Affiliate Program</h4>
                <p>
                  Earn crypto with the Algoo Strategies Affiliate Program. Refer
                  new users to Algoo Trading and earn up to 10% of the
                  investors' rewards
                </p>
                <p>
                  The Algoo Strategies Affiliate Program empowers our community,
                  influencers, content creators, and platforms to monetize
                  traffic by introducing Algoostrategies.org to the world. The
                  Algoo Affiliate Program allows registered members to share (or
                  “refer”) a unique link with unregistered family and friends
                  and begin earning rewards soon after.
                </p>
                <h4>How does AlgooTrading' Affiliate Program work?</h4>
                <p>
                  When friends or community click on that unique link, register
                  with Algoostrategies.org, and make that first deposit of $500,
                  Affiliates will begin earning rewards based on a percentage of
                  the earnings of those new referred members. Affiliate rewards
                  are paid in USDC so please remember to open a USDC card so
                  that you may view these affiliate rewards.
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

export default Affiliate;
