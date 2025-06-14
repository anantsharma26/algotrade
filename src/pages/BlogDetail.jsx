import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";

const BlogDetail = () => {
  return (
    <>
      <section className="inner-banner">
        <div className="container">
          <div className="sec-head">
            <div className="cols-2">
              <h1>Blog</h1>
              <Search placeholder="Search news" />
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrum">
        <div className="container">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">News</Link>
            </li>
            <li>
              <Link to="" className="current-page">
                Bitcoin Passes $50,000 For The First Time Since 2021
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="feature-inner">
        <div className="container">
          <div className="banner-img">
            <img src="/banner-bg.jpg" alt="blog-banner" />
          </div>
        </div>
      </section>
      <section className="blog-content-inner">
        <div className="container">
          <div className="blog-detail-head">
            <h4 className="detail-head">
              Bitcoin Passes $50,000 For The First Time Since 2021
            </h4>
            <p className="date">2024-02-08 08:05</p>
          </div>
          <div className="blog-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor leo ac nulla suscipit, vel convallis ipsum rutrum. Morbi et
              velit nec neque commodo pretium non non sem. Nunc varius interdum
              turpis, id lobortis justo vulputate quis. Integer viverra faucibus
              elit, ut egestas massa viverra finibus. Pellentesque egestas augue
              eu condimentum condimentum. Vivamus congue velit turpis, sit amet
              tempus dolor scelerisque quis. Vestibulum bibendum, justo sed
              semper facilisis, risus libero placerat justo, sit amet imperdiet
              tellus quam et eros. Vivamus pretium rutrum orci nec ultrices. Sed
              sapien est, porttitor non hendrerit nec, imperdiet a arcu. Vivamus
              luctus suscipit quam at placerat.
            </p>
            <h5>Neque porro quisquam est qui doloremtetur</h5>
            <ul>
              <li>
                Pellentesque facilisis turpis interdum mi tristique, et
                pellentesque quam efficitur.
              </li>
              <li>
                Nullam et ex sit amet augue hendrerit consectetur eget non
                sapien.
              </li>
              <li>Nam a turpis quis neque sollicitudin lobortis.</li>
              <li>Cras ut orci rutrum nisi malesuada luctus.</li>
              <li>Nam tempor purus a placerat vestibulum.</li>
              <li>Sed mollis elit vitae ornare mollis.</li>
              <li>Curabitur pulvinar libero id ornare pharetra.</li>
              <li>
                Morbi ultricies tortor eu nulla volutpat, iaculis blandit nisi
                pellentesque.
              </li>
              <li>Cras condimentum turpis vitae dictum ullamcorper.</li>
              <li>Quisque commodo dui a pulvinar vehicula.</li>
              <li>Integer et massa et justo gravida venenatis.</li>
              <li>Curabitur nec tortor in nisl placerat blandit.</li>
            </ul>
          </div>
          <div className="share-media">
            <div className="share-head">
              <p>
                Share{" "}
                <span>
                  <img src="/share.svg" alt="share" />
                </span>
              </p>
            </div>
            <div className="social-share">
              <ul>
                <li>
                  <Link to="/">
                    <img src="/discord.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="/telegram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="/twitter-new.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="/youtube.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="similar-blog">
        <div className="container">
          <h3 className="head">Similar News</h3>
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
    </>
  );
};

export default BlogDetail;
