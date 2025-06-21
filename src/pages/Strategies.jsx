import React from "react";
import Button from "../components/Buttons/Button";
import Faq from "../components/Faqs/Faq";

const Strategies = () => {
  const faqs = [
    {
      faqhead: "How to invest in CeDefi Strategies",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
    {
      faqhead: "Which CeDefi Strategy should I choose?",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
    {
      faqhead:
        "We’ve constructed various investment strategies suitable for different market conditions - Yield, DeFi, and Hedging Select a strategy based on your market expectations and risks.",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
    {
      faqhead: "Is the ROI final?",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
    {
      faqhead: "Are there any risks?",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
    {
      faqhead: "How to track the performance of CeDefi Strategies?",
      faqdata:
        "Investing in strategies means buying a token of a certain strategy that exists only on the Algoo Strategies platform. To buy tokens, deposit the tokens inside your wallet after KYC verification on the Algoo Strategies' platform.",
    },
  ];

  const advantages = [
    {
      head: "High Performance",
      para: "High performance in various market cycles following high yields from DeFi protocols.",
    },
    {
      head: "Simple Interface",
      para: "User-friendly interface that allows investors to easily engage in complex DeFi strategies in just a few clicks.",
    },
    {
      head: "Detailed Analytics",
      para: "Transparent, on-chain analytics which shows the performance of each strategy.",
    },
    {
      head: "High Liquidity",
      para: "Liquid positions which allow investors to enter and exit these strategies 24/7.",
    },
  ];

  const risks = [
    {
      head: "Market movement",
      para: "Market trends which perform counter to the original concept of the strategy (which may result in price depreciation and some level of loss of original capital investment).",
    },
    {
      head: "High Volatility",
      para: "High volatility in the market may lead to impermanent loss.",
    },
    {
      head: "It's still DeFi ツ",
      para: "Systematic DeFi risks associated with the vulnerability of protocols and smart contracts.",
    },
  ];

  return (
    <>
      <section className="strategy">
        <div className="container">
          <div className="strategy-txt">
            <div className="txtbg">
              <h1>High Roi</h1>
            </div>
            <p>
              Begin building wealth by harnessing the power of DeFi
              protocols through the algorithmic infrastructure of Algoo
              Strategies' platform
            </p>
          </div>
        </div>
      </section>
      <section className="coreinvert cedfi">
        <div className="container">
          <div className="invest-inner">
            <h3 className="sec-head white">What are CeDefi Strategies?</h3>
            <div className="feature-list">
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/algorithm-tool.svg" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Algorithmic Tools</h4>
                  <p>
                    A combination of DeFi strategies with algorithmic tools.
                  </p>
                </div>
              </div>
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/tokenized.svg" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Tokenized Positions</h4>
                  <p>
                    Tokenized long and short positions on lending markets to
                    balance portfolio risk.
                  </p>
                </div>
              </div>
              <div className="core-feature">
                <div className="feature-icon">
                  <img src="/streamline.png" alt="feature-img" />
                </div>
                <div className="feature-description">
                  <h4>Liquidity Management</h4>
                  <p>
                    Automated investment yield products gathering protocol fees
                    while managing liquidity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cedefi-strategies">
        <div className="container">
          <h3 className="sec-head">CeDeFi Strategies by the Numbers</h3>
          <div className="strategy-numberlist">
            <div className="strategy-box">
              <h4>1500 users</h4>
              <p>Utilizing CeDeFi Strategies</p>
            </div>
            <div className="strategy-box">
              <h4>$14,200,164</h4>
              <p>Total Deposits</p>
            </div>
            <div className="strategy-box">
              <h4>96 %+</h4>
              <p>Best monthly performance</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cedefi-terms">
        <div className="container">
          <h3 className="sec-head">CeDefi Strategies in basic terms.</h3>
          <div className="terms-list">
            <div className="terms-box">
              <p>
                Enter and exit any strategy at any time based on your vision and
                risk profile.
              </p>
            </div>
            <div className="terms-box">
              <p>
                Manage the portfolio in one place adapting it to market
                conditions
              </p>
            </div>
            <div className="terms-box">
              <p>Risks are split into tranches, more risk - more yield</p>
            </div>
          </div>
        </div>
      </section>
      <section className="high-roi roipage">
        <div className="container">
          <div className="roi-head">
            <h3 className="sec-head">Meet our CeDefi Strategies</h3>
            <p>We will regularly add new strategies to the platform</p>
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
      <section className="advantage-risk">
        <div className="container">
          <h3 className="sec-head">Advantages & Risks</h3>
          <div className="factor-row">
            <div className="factor-box advantage">
              <h4 className="factor-head">Advantages</h4>
              <div className="features">
                {advantages.map((list, index) => {
                  return (
                    <div className="factor-list" key={index}>
                      <p className="factor-number">0{index + 1}</p>
                      <div className="factor-head">
                        <h4>{list.head}</h4>
                        <p>{list.para}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="factor-box risk">
              <h4 className="factor-head">Advantages</h4>
              <div className="features">
                {risks.map((list, index) => {
                  return (
                    <div className="factor-list key={index}">
                      <p className="factor-number">0{index + 1}</p>
                      <div className="factor-head">
                        <h4>{list.head}</h4>
                        <p>{list.para}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roi-steps-list">
        <div className="roi-step">
          <div className="container">
            <div className="cols2">
              <div className="roi-img">
                <img src="/step1.png" alt="step1" />
              </div>
              <div className="stepbox">
                <div className="stepcount">
                  <Button className="bluebtn">Step 1</Button>
                  <div className="step-info">
                    <h4>Verify Create an account identity</h4>
                    <p>Sign up on Algoo Trading platform using your email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roi-step reverse">
          <div className="container">
            <div className="cols2">
              <div className="stepbox">
                <div className="stepcount">
                  <Button className="bluebtn">Step 2</Button>
                  <div className="step-info">
                    <h4>Verify your identity</h4>
                    <p>
                      Verify your identity by providing us with the requested
                      information. Your verification will be processed over the
                      following 2 working days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="roi-img">
                <img src="/step1.png" alt="step1" />
              </div>
            </div>
          </div>
        </div>
        <div className="roi-step">
          <div className="container">
            <div className="cols2">
              <div className="roi-img">
                <img src="/step1.png" alt="step1" />
              </div>
              <div className="stepbox">
                <div className="stepcount">
                  <Button className="bluebtn">Step 3</Button>
                  <div className="step-info">
                    <h4>Make a deposit</h4>
                    <p>
                      Deposit any supported crypto on Algoo Trading’s platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roi-step reverse top">
          <div className="container">
            <div className="cols2">
              <div className="stepbox">
                <div className="stepcount">
                  <Button className="bluebtn">Step 4</Button>
                  <div className="step-info">
                    <h4>Trade Strategies</h4>
                    <p>
                      Trade different available strategies or stake yield
                      assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="roi-img">
                <img src="/step1.png" alt="step1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="earn-crypto">
        <div className="container">
          <div className="headbox">
            <h3 className="sec-head">
              Earn a Fixed Yield on Your Crypto Assets
            </h3>
            <p>
              If you’d prefer to earn a stable, fixed yield on your digital
              assets, there are more than 15 assets with fixed yields available
              on Algoo Strategies' platform
            </p>
          </div>
        </div>
        <div className="assets-box">
          <img src="/assetsimg.png" alt="" />
        </div>
      </section>
      <section className="faqs">
        <div className="container">
          <div className="cols-2">
            <div className="faq-heads">
              <h3>Frequently Asked Questions about our strategies</h3>
              <p>
                Can’t find the answer you’re looking for? Feel free to contact
                us directly via our contact page How to invest in CeDefi
                Strategies
              </p>
            </div>
            <Faq data={faqs} />
          </div>
        </div>
      </section>
      <section className="performance roi">
        <div className="container">
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
    </>
  );
};

export default Strategies;
