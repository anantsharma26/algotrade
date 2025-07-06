import React from "react";
import Button from "../components/Buttons/Button";
import Sidebar from "../components/Sidebar/sidebar";
import Faq from "../components/Faqs/Faq";

const FaqMain = () => {
  const faqsitem = [
    {
      faqhead: "Are there any restrictions for US investors?",
      faqdata:
        "We do not have any restrictions for any investor. You can use algootrading.org as any other crypto platform and apply the same rules to it. Keep in mind the laws of your state. You can download a CSV report for any particular asset. In order to get deposit&withdraw and reward report for your entire account, please contact our Support via chat on the website.",
    },
    {
      faqhead:
        "I deposited funds to Algoo Trading, but haven't received them yet. What should I do?",
      faqdata:
        "Please contact our Support Team via chat on the website. Never DM your sensitive info to anyone on Discord or Telegram",
    },
    {
      faqhead:
        "What trading strategies are available on the Algoo Trading platform?",
      faqdata: `Algoo Trading provides a range of trading strategies that are designed to suit the needs of different types of investors. These strategies are grouped into four main categories: CeDeFi, DeFi, Hedging, and Fixed Yield.
  
The CeDeFi strategies utilize both centralized and decentralized finance (CeDeFi) protocols to optimize returns while reducing risks. These strategies are designed for investors who want to take advantage of the benefits of both centralized and decentralized financial systems.

The DeFi strategies focus solely on decentralized finance (DeFi) protocols, leveraging the power of blockchain technology and smart contracts to generate higher returns. These strategies are suitable for investors who want to take advantage of the growth potential of the DeFi ecosystem.

The hedging strategies are designed to minimize risk and provide a hedge against market volatility. These strategies use various techniques, such as short selling, options trading, and futures contracts, to reduce risk and generate stable returns.

The fixed-yield strategies are designed to provide stable, predictable returns over a fixed period. These strategies invest in fixed-income assets, such as USDC and other ERC-20 tokens to generate consistent returns.

Each strategy is designed with a specific objective and risk profile in mind, providing investors with a wide range of options to suit their investment preferences.

Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.`,
    },
    {
      faqhead: "Are there any risks?",
      faqdata:
        "Each strategy has its own risks that an investor must take into account when investing in a particular strategy. Algoo helps to minimize these risks through various monitoring tools.",
    },
    {
      faqhead: "How do I register a business account?",
      faqdata:
        "Algoo Trading does not support the option to create business accounts currently, but it may be available later. Keep an eye on our announcements.",
    },
    {
      faqhead:
        "Will there be any restrictions to pass the KYC? For US users for example?",
      faqdata: "No one will be excluded as part of this KYC onboarding.",
    },
    {
      faqhead: "What to do if I failed verification?",
      faqdata: "No one will be excluded as part of this KYC onboarding.",
    },
  ];

  return (
    <>
      <section className="tab-panel">
        <div className="container">
          <div className="cols-2">
            <Sidebar activeTab={"mission"} />
            <div className="tab-content">
              <div className="content-head">
                <h5>FAQ</h5>
              </div>
              <div className="tab-content-part faq">
                <h4>FAQ</h4>
                <p>
                  Please take a look at the subpages. If you can't find your
                  answers, reach out to us on Telegram, we'll help you!
                </p>
                <Faq data={faqsitem} />
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

export default FaqMain;
