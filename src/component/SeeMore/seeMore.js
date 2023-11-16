import React from "react";
import "./style.seeMore.css";
import Container from "./container";
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
                    <Link to="/HeaderIndex">
                      <a href="/">
                        Home
                        <i
                          className="fa-solid  fa fa-chevron-down fa-sm"
                          style={{ color: "rgb(172, 171, 171)" }}
                        ></i>
                      </a>
                    </Link>

                    <ul className="dropdown">
                      <li>
                        <a href="/">All</a>
                      </li>
                      <li>
                        <a href="/">Movies</a>
                      </li>
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
                  <Link to="/Categories">
                    <li>
                      <a href="/">
                        Categories
                        <i
                          className="fa-solid fa-chevron-down fa-sm"
                          style={{ color: "rgb(172, 171, 171)" }}
                        ></i>
                      </a>
                    </li>
                  </Link>
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

      <div className="section-head">
        <h1>Drama movies</h1>
        <button>
          Content Type
          <i
            className="fa-solid  fa fa-chevron-down fa-sm"
            // style={{ color: "#fff" }}
          ></i>
        </button>
      </div>
      {/* sectiom */}

      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />

      {/* footer */}

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
