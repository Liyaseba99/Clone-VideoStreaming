import React from "react";
import "./style.header.css";
import { Link } from "react-router-dom";

export default function headerIndex() {
  return (
    <>
      <header>
        <div className="header-containerr">
          <div className="header-leftt">
            <a href="/">prime video</a>
          </div>

          <div className="header-midd">
            <ul>
              <div className="header-list-containerr">
                <div className="header-listt">
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

                <div className="header-listt">
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
                <div className="header-listt">
                  <li>
                    <a href="/">Live TV</a>
                  </li>
                </div>
                <div className="header-listt">
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

          <div className="header-endd">
            <div className="header-end-conatinerr">
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

      {/* <!--Section banner--> */}
      <section className="banner">
        <div className="banner-container">
          <div className="banner-writing-container">
            <div className="banner-heading">
              <p>Welcome to Prime Video</p>
            </div>
            <div className="banner-desc">
              <p>
                Watch the latest movies, TV shows, and award-winning Amazon
                Originals
              </p>
            </div>
            <div className="banner-btn">
              <button>
                <a href="/">Sign in to join Prime</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Rentals--> */}

      <section className="banner">
        <div className="banner-container rental-container">
          <div className="banner-writing-container rental-writing-container">
            <div className="banner-heading rental-heading">
              <p>Movie rentals on Prime Video</p>
            </div>
            <div className="banner-desc rental-desc">
              <p>Early Access to new movies, before digital subscription</p>
            </div>
            <div className="banner-btn rental-btn">
              <button>
                <a href="">Rent now</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--channels--> */}

      <section className="channels">
        <div className="channels-container">
          <div className="channels-left">
            <div className="channels-left-div">
              <div className="channels-heading">
                <p>Your favorite channels all in one place</p>
              </div>
              <div className="channels-desc">
                <p>
                  With Prime Video Channels, find shows and movies from your
                  favorite channels all in one place. Enjoy with an add-on
                  subscription to Channels of your choice.
                </p>
              </div>
            </div>
          </div>
          <div className="channels-right">
            <div className="channels-right-div">
              <div className="channels-box">
                <img src={require("../../Image/box_one.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_two.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_three.png")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_four.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_five.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_six.png")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_seven.png")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_eight.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_nine.jpg")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_ten.png")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box__eleven.png")} />
              </div>
              <div className="channels-box">
                <img src={require("../../Image/box_twelve.jpg")} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Tv sticks--> */}

      <section className="tvstick">
        <div className="tvstick-conatiner">
          <div className="tvstick-writing">
            <div className="tvstick-heading">
              <p>Even better with Fire TV Stick</p>
            </div>
            <div className="tvstick-desc">
              <p>
                The biggest movies and TV shows are always better on a big
                screen. Simply plug in your Amazon Fire TV Stick and stream on
                any HDTV. Press the voice button on the remote and say the name
                of the title you want to watch to find it in seconds.
              </p>
            </div>
            <div className="tvstick-btn">
              <button>
                <a href="/">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Family friendly--> */}

      <section className="tvstick">
        <div className="tvstick-conatiner family-container">
          <div className="tvstick-writing family-writing">
            <div className="tvstick-heading">
              <p>Family Friendly</p>
            </div>
            <div className="tvstick-desc family-desc">
              <p>
                With easy to use Parental Controls and a dedicated kids page,
                enjoy secure, ad-free kids entertainment. Kids can enjoy popular
                TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
              </p>
            </div>
            <div className="tvstick-btn">
              <button>
                <a href="/">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--footer--> */}
      <footer>
        <div className="footer-container">
          <div className="logo">
            <img src={require("../../Image/footer-logo.png")} />
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
