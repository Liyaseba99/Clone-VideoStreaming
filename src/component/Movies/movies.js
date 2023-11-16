// import { CCarousel } from "@coreui/react";
import React from "react";
import "./style.movies.css";
import { Link } from "react-router-dom";

import Container from "../SeeMore/container";

export default function movies() {
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
                    <div className="header-list-categories">
                      <Link to="/HeaderIndex">
                        <a href="/">
                          Home
                          <i
                            className="fa-solid  fa fa-chevron-down fa-sm"
                            style={{ color: "rgb(172, 171, 171)" }}
                          ></i>
                        </a>
                      </Link>
                    </div>

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
      </div>
      <div className="container-fluid">
        <h1 className="text-white  ps-5 pt-5 movie">Movies</h1>
      </div>
      {/* slider */}

      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper one">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <div className="banner-write transition-container">
                <div className="bottom-to-top">
                  <h4 className="rank">#1 in India</h4>
                  {/* <div> */}
                  <img
                    className="banner-logo"
                    src={require("../../Image/pippa.webp")}
                  />
                  {/* </div> */}
                  <div className="element-flex">
                    <i
                      className="fa-solid fa-circle-check fa-2xl"
                      style={{ color: "#0a60f5" }}
                    />
                    <h6>Watch with a free Prime trial</h6>
                    <h6 className="btn-5">U/A 16+</h6>
                  </div>
                </div>
                <div className="banner-last bottom-to-top-two">
                  <button>
                    <a href="/">More details</a>
                  </button>
                  <i
                    className="fa-solid fa-circle-plus fa-2xl"
                    style={{ color: "#b6b7b943" }}
                  />
                </div>
              </div>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper two"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
            <div className="banner-write transition-container rocky">
              <Link to="/MovieDetail">
                <div className="bottom-to-top">
                  <h4 className="rank">#7 in India</h4>
                  {/* <div> */}
                  <img
                    className="banner-logo"
                    src={require("../../Image/rocky.webp")}
                  />
                  {/* </div> */}
                  <div className="element-flex">
                    <i
                      className="fa-solid fa-circle-check fa-2xl"
                      style={{ color: "#0a60f5" }}
                    />
                    <h6>Watch with a free Prime trial</h6>
                    <h6 className="btn-5">U/A 16+</h6>
                  </div>
                </div>
              </Link>
              <div className="banner-last bottom-to-top-two">
                <button>
                  <a href="/">More details</a>
                </button>
                <i
                  className="fa-solid fa-circle-plus fa-2xl"
                  style={{ color: "#b6b7b943" }}
                />
              </div>
            </div>
          </li>
          <li id="carousel__slide3" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper three"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
            <div className="banner-write transition-container">
              <div className="bottom-to-top">
                {/* <h4 className="rank">#1 in India</h4> */}
                {/* <div> */}
                <img
                  className="banner-logo"
                  src={require("../../Image/bts.webp")}
                />
                {/* </div> */}
                <div className="element-flex">
                  <i
                    className="fa-solid fa-circle-check fa-2xl"
                    style={{ color: "#0a60f5" }}
                  />
                  <h6>Watch with a free Prime trial</h6>
                  <h6 className="btn-5">U/A 16+</h6>
                </div>
              </div>
              <div className="banner-last bottom-to-top-two">
                <button>
                  <a href="/">More details</a>
                </button>
                <i
                  className="fa-solid fa-circle-plus fa-2xl"
                  style={{ color: "#b6b7b943" }}
                />
              </div>
            </div>
          </li>
          <li id="carousel__slide4" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper four"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
            <div className="banner-write transition-container fukrey">
              <div className="bottom-to-top">
                {/* <h4 className="rank">#1 in India</h4> */}
                {/* <div> */}
                <img
                  className="banner-logo"
                  src={require("../../Image/fukrey.webp")}
                />
                {/* </div> */}
                <div className="element-flex">
                  <i
                    className="fa-solid fa-lock fa-2xl"
                    style={{ color: "#d6b81f" }}
                  />
                  <h6>Available to rent</h6>
                  <h6 className="btn-5">U/A 16+</h6>
                </div>
              </div>
              <div className="banner-last bottom-to-top-two">
                <button>
                  <a href="/">More details</a>
                </button>
                <i
                  className="fa-solid fa-circle-plus fa-2xl"
                  style={{ color: "#b6b7b943" }}
                />
              </div>
            </div>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item ">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Drama Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Action and adventure</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Latest Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Drama Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Horror Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Comedy Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />

      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Recently added Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
      <Container />
      <div className="product-heading">
        <h5 className="prime">Prime</h5>
        <h5>Sci-fi Movies</h5>
        <Link to="/SeeMore">
          <h5 className="see-more">See more</h5>
        </Link>
        <i
          className="fa-solid fa-chevron-right "
          style={{ color: "#ffffff" }}
        />
      </div>
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
