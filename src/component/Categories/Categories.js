import React from "react";
import "./style.Categories.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div className="container">
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
                <div className="header-list header-list-categories dropdown">
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
      </div>

      <div classNameName="container-fluid main">
        <h1 className="text-white  ps-5 pt-5 categories">Categories</h1>
        <h5 className="text-white ps-5 mt-4 geners">Geners</h5>
        <div className="conatiner p-5">
          <div className="row row-div">
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/action.webp")} />
                <h3>Action and adventure</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/anime.webp")} />
                <h3>Anime</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/comedy.webp")} />
                <h3>Comedy</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/docu.webp")} />
                <h3>Documentary</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/drama.webp")} />
                <h3>Drama</h3>
              </a>
            </div>
          </div>

          <div className="row row-div">
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/action.webp")} />
                <h3>Fantasy</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/anime.webp")} />
                <h3>Horror</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/comedy.webp")} />
                <h3>Kids</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/docu.webp")} />
                <h3>Mistery and thrillers</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/drama.webp")} />
                <h3>Romance</h3>
              </a>
            </div>
          </div>

          <div className="row sci-div">
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/action.webp")} />
                <h3>Science fiction</h3>
              </a>
            </div>
          </div>
        </div>

        <h5 className="text-white ps-5 mt-4 geners">Featured collections</h5>
        <div className="conatiner p-5">
          <div className="row row-div">
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Hindi</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>English</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Telugu</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Tamil</h3>
              </a>
            </div>
            <div className="col-sm-2 col-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Malayalam</h3>
              </a>
            </div>
          </div>

          <div className="row row-div">
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Kanada</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Marati</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Punjabi</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Gujarati</h3>
              </a>
            </div>
            <div className="col-sm-2 col-two-div">
              <a href="/">
                <img src={require("../../Image/blue.webp")} />
                <h3>Bengali</h3>
              </a>
            </div>
          </div>
        </div>

        <footer>
          <div className="logo">
            <a href="/">
              <img src={require("../../Image/footer-logo.png")} />
            </a>
          </div>

          <div className="footer-conditions">
            <div className="terms">
              <a href="/">Terms and Privacy Notice</a>
            </div>
            <div className="feedback">
              <a href="/">Send us feedback</a>
            </div>
            <div className="help">
              <a href="/">Help</a>
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
      </div>
    </>
  );
}
