import React from "react";
import Button from "../components/Buttons/Button";
import Sidebar from "../components/Sidebar/sidebar";
import Faq from "../components/Faqs/Faq";

const Kyc = () => {
  const faqsitem = [
    {
      faqhead: "Can I have more than one account?",
      faqdata:
        "At the moment, it is possible to create more than one account for one person.",
    },
    {
      faqhead: "How do I register a business account?",
      faqdata:
        "Algoo Strategies does not support the option to create business accounts currently, but it may be available later. Keep an eye on our announcements.",
    },
    {
      faqhead:
        "Will there be any restrictions to pass the KYC? For US users for example?",
      faqdata: "No one will be excluded as part of this KYC onboarding.",
    },
    {
      faqhead: "How long does an identity check take?",
      faqdata:
        "Standard check normally takes about 3 minutes. In case of difficulties, it may last for up to 24 hours. If you haven't received a reply during this period, please contact our support team.",
    },
    {
      faqhead: "What restrictions will apply to accounts that do not pass KYC?",
      faqdata:
        "Without KYC, users will not be able to:\n- Deposit\n- Earn payouts\n- Receive affiliate rewards",
    },
    {
      faqhead: "What to do if I failed verification?",
      faqdata:
        "During the check, you have five attempts to upload correct documents or provide relevant data. Otherwise, you will not be able to pass verification. If you have uploaded incorrect documents five times, or you have some questions about the check, feel free to contact Algoo Strategies support team via the live chat on algoostrategies.org",
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
                <h4>KYC</h4>
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

export default Kyc;
