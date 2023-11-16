import React from "react";
import "./style.movie.detail.css";
import Container from "../SeeMore/container";
import { Link } from "react-router-dom";
export default function moreDetails() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-left">
            <a href="/">prime video</a>
          </div>

          <div className="header-mid">
            <ul>
              <div className="header-list-container">
                <div className="header-list">
                  <li>
                    <a href="/">
                      Home
                      <i
                        className="fa-solid  fa fa-chevron-down fa-sm"
                        style={{ color: "rgb(172, 171, 171)" }}
                      ></i>
                    </a>

                    <ul className="dropdown">
                      <li>
                        <a href="/">All</a>
                      </li>
                      <Link to="/Movies">
                        <li>
                          <a href="/">Movies</a>
                        </li>
                      </Link>
                      <li>
                        <a href="/">TV Shows</a>
                      </li>
                    </ul>
                  </li>
                </div>

                <div className="header-list">
                  <li>
                    <a href="/">
                      {" "}
                      Store
                      <i
                        className="fa-solid fa-chevron-down fa-sm"
                        style={{ color: "rgb(172, 171, 171)" }}
                      ></i>
                    </a>

                    <ul className="dropdown">
                      <li>
                        <a href="/">All</a>
                      </li>
                      <li>
                        <a href="/">Rent</a>
                      </li>
                      <li>
                        <a href="/">Channels</a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="header-list">
                  <li>
                    <a href="/">Live TV</a>
                  </li>
                </div>
                <div className="header-list">
                  <li>
                    <Link to="/Categories">
                      <a href="/">
                        Categories
                        <i
                          className="fa-solid fa-chevron-down fa-sm"
                          style={{ color: "rgb(172, 171, 171)" }}
                        ></i>
                      </a>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div className="header-end">
            <div className="header-end-conatiner">
              <div className="search-icon">
                <a href="/">
                  <i
                    className="fa-solid fa-magnifying-glass fa-lg"
                    style={{ color: "rgb(172, 171, 171)" }}
                  />
                </a>
              </div>
              <div className="free">
                <a href="/"> Try for free</a>
              </div>
              <div className="dropdown">
                <div className="lang">
                  <a href="/">
                    EN
                    <i
                      className="fa-solid fa-chevron-down fa-sm"
                      style={{ color: "rgb(172, 171, 171)" }}
                    ></i>
                  </a>
                  <div className="dropdown-content">
                    <div className="column">
                      <a href="#">English</a>
                      <a href="#">Spanish</a>
                      <a href="#">French</a>
                      <a href="#">German</a>
                      <a href="#">Italian</a>
                    </div>
                    <div className="column">
                      <a href="#">Portuguese</a>
                      <a href="#">Russian</a>
                      <a href="#">Chinese (Simplified)</a>
                      <a href="#">Japanese</a>
                      <a href="#">Korean</a>
                    </div>
                    <div className="column">
                      <a href="#">Arabic</a>
                      <a href="#">Dutch</a>
                      <a href="#">Swedish</a>
                      <a href="#">Norwegian</a>
                      <a href="#">Danish</a>
                    </div>
                    <div className="column">
                      <a href="#">Finnish</a>
                      <a href="#">Greek</a>
                      <a href="#">Turkish</a>
                      <a href="#">Hindi</a>
                      <a href="#">Thai</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user">
                <a href="/">
                  <i
                    className="fa-solid fa-circle-user fa-2xl"
                    style={{ color: "rgb(114, 132, 167)" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* </Header> */}

      {/* banner */}
      <section className="more-banner">
        <h1 className="prime">prime</h1>
        <div className="details-more-div">
          <h5>#6 in India</h5>
          <p className="head">Rocky Aur Rani Kii Prem Kahaani</p>
          <p className="para">
            A rollercoaster journey taking you through an epic love story in a
            new-age era, topped with hearty laughs and posing questions about
            love, family and the meaning of breaking away from generations of
            family traditions in the name of love.
          </p>
          <div className="time">
            <p className="color">2 h 58 min</p>
            <p className="color">2023</p>
            <p className="btn">X-RAY</p>
            <p className="btn">HDR</p>
            <p className="btn">UHD</p>
            <p className="btn">U/A 13+</p>
            <i className="fa-solid fa-laptop" style={{ color: "#fff" }} />
          </div>
          <div className="genre">
            <a href="/">Comedy</a>
            <p>.</p>
            <a href="/">Drama</a>
            <p>.</p>
            <a href="/">International</a>
          </div>
          <div className="element-flexx">
            <i
              className="fa-solid fa-circle-check fa-lg"
              style={{ color: "#0a60f5" }}
            />
            <h6>Watch with a free Prime trial</h6>
          </div>
          <div className="iconns">
            <button className="btn-three">
              Watch with Prime
              <p> Start your 30-day free trial</p>
            </button>
            <button className="btn-three sign">
              Rent
              <p>
                UHD
                <i
                  className="fa-solid fa-indian-rupee-sign "
                  style={{ color: "#636363;" }}
                ></i>
                279
              </p>
            </button>
            <button className="btn-three signn">More purchase options</button>
            <i
              className="fa-solid fa-film fa-2xl icon"
              style={{ color: "#fff" }}
            />
            <i
              className="fa-solid fa-circle-plus fa-2xl icon"
              style={{ color: "#fff" }}
            ></i>
            <i
              className="fa-solid fa-thumbs-up fa-2xl icon"
              style={{ color: "#fff" }}
            ></i>
            <i
              class="fa-solid fa-thumbs-down fa-2xl icon"
              style={{ color: "#fff" }}
            ></i>

            <i
              className="fa-solid fa-share-nodes fa-2xl icon"
              style={{ color: "#fff" }}
            ></i>
          </div>
          <p className="para-rent">
            Rentals include 30 days to start watching this video and 48 hours to
            finish once started.
          </p>
        </div>
      </section>

      <div className="fixed">
        <div className="related">Related</div>
        <Link to="/More">
          <div className="det">Details</div>
        </Link>
      </div>

      <h5 className="cust">Customers also watched</h5>
      <Container />

      <footer>
        <div className="logo">
          <a href="/">
            <img src={require("../../Image/footer-logo.png")} />
          </a>
        </div>

        <div className="footer-conditions">
          <div className="terms">
            <a href="">Terms and Privacy Notice</a>
          </div>
          <div className="feedback">
            <a href="">Send us feedback</a>
          </div>
          <div className="help">
            <a href="">Help</a>
          </div>

          <div className="footer-details">
            <p>
              <i
                className="fa-regular fa-copyright"
                style={{ color: "#89898d" }}
              ></i>
              1996-2023, Amazon.com, Inc.or its afflitates
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
