import React from "react";
import "./sidebar.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
const Sidebar = ({ activeTab }) => {
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];

  useEffect(() => {
    const activeLink = document.querySelector(".sub-list a.active");
    if (activeLink) {
      const parentMenuItem = activeLink.closest(".has-menu");
      if (parentMenuItem) {
        parentMenuItem.classList.add("active");
      }
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="main-head">
        <h5>CONTENT</h5>
      </div>
      <div className="sidebar-list">
        <ol className="main-list">
          <li className="has-menu">
            <Link to={"#"}>OVERVIEW</Link>
          </li>
          <li className="has-menu">
            <Link to={"#"}>INTRODUCTION</Link>
            <ul className="sub-list">
              <li>
                <Link
                  to={"#"}
                  className={`${pageName == "wiki" ? "active" : ""}`}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link to={"#"}>Gensis</Link>
              </li>
              <li>
                <Link to={"#"}>Team</Link>
              </li>
            </ul>
          </li>
          <li className="has-menu">
            <Link to={"#"}>TUTORIALS</Link>
          </li>
          <li className="has-menu">
            <Link to={"#"}>ALGOO TRADING PLATFORM</Link>
            <ul className="sub-list">
              <li>
                <Link to={"#"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"#"}>SECURITY</Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className={`${pageName == "affiliate" ? "active" : ""}`}
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to={"#"}>Boost Tier Program</Link>
              </li>
              <li>
                <Link to={"#"}>AMM Price Impact on Swaps</Link>
              </li>
            </ul>
          </li>
          <li className="has-menu">
            <Link to={"#"}>INVESTMENT PRODUCTS</Link>
          </li>
          <li className="has-menu">
            <Link to={"#"}>RESOURCES</Link>
          </li>
          <li className="has-menu">
            <Link to={"#"}>FAQ</Link>
            <ul className="sub-list">
              <li>
                <Link
                  to={"#"}
                  className={`${pageName == "faq" ? "active" : ""}`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"#"}>Deposit</Link>
              </li>
              <li>
                <Link to={"#"}>Withdrawal</Link>
              </li>
              <li>
                <Link to={"#"}>Strategies</Link>
              </li>
              <li>
                <Link to={"#"}>Algoo Trading Tiers</Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className={`${pageName == "kyc" ? "active" : ""}`}
                >
                  KYC
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-menu">
            <Link to={"#"}>ADDITIONAL RESOURCES</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
