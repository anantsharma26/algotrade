import React, { useState } from "react";
import "./faq.css";

const Faq = ({ data, ...props }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faqs-list">
      {data.map((faqs, index) => {
        return (
          <div
            key={index}
            className={`${openIndex === index ? "active" : ""} faq-box`}
            onClick={() => toggleFaq(index)}
          >
            <h4 className="faq-head">{faqs.faqhead}</h4>
            <div className="faq-content">
              {openIndex === index && <p>{faqs.faqdata}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
