import React from "react";
import "./style.seeMore.css";
import { Link } from "react-router-dom";

export default function container() {
  return (
    <div className="card-container-flex">
      <div class="card-container">
        <div>
          <div class="card-image">
            <img src={require("../../Image/pathan_product.webp")} />
          </div>
          <div class="display-none">
            <div class="watch">
              <i
                class="fa-solid fa-circle-check"
                style={{ color: "#0a60f5" }}
              ></i>
              <h4>Watch with a free Prime trial</h4>
            </div>
            <div class="film">
              <h2>Pathaan</h2>
              <i
                class="fa-solid fa-film fa-lg pluss"
                style={{ color: "#6e6e6e" }}
              ></i>
              <i
                class="fa-solid fa-circle-plus plus"
                style={{ color: "#6d6a6a" }}
              ></i>
            </div>
            <div class="number">
              <h4>2023</h4>
              <h4>2 h 28 min</h4>
              <h4 className="number-btn">U/A 13+</h4>
            </div>
            <h4 class="ranking">#9 in India</h4>
            <h4 class="details">
              Indian RAW agent "Pathaan"(Shah Rukh Khan) gets to know of a m
              ajor impending attack against India...
            </h4>
          </div>
        </div>
      </div>

      <Link to="/MovieDetail">
        <div class="card-container cord">
          <div>
            <div class="card-image">
              <img src={require("../../Image/rocky_product.webp")} />
            </div>
            <div class="display-none">
              <div class="watch">
                <i
                  class="fa-solid fa-circle-check"
                  style={{ color: "#0a60f5" }}
                ></i>
                <h4>Watch with a free Prime trial</h4>
              </div>
              <div class="film">
                <h2>Rocky Aur Rani Kii Prem Kahani</h2>
                <i
                  class="fa-solid fa-film fa-lg pluss"
                  style={{ color: "#6e6e6e" }}
                ></i>
                <i
                  class="fa-solid fa-circle-plus plus"
                  style={{ color: "#6d6a6a" }}
                ></i>
              </div>
              <div class="number">
                <h4>2023</h4>
                <h4>2 h 28 min</h4>
                <h4 className="number-btn">U/A 13+</h4>
              </div>
              <h4 class="ranking">#6 in India</h4>
              <h4 class="details">
                A rollercoaster journey taking you through an epic love story in
                a new-age era, topped with hearty laughs....
              </h4>
            </div>
          </div>
        </div>
      </Link>

      <div class="card-container cord">
        <div>
          <div class="card-image">
            <img src={require("../../Image/mark_product.webp")} />
          </div>
          <div class="display-none" id="hide">
            <div class="watch">
              <i
                class="fa-solid fa-circle-check "
                style={{ color: "#0a60f5" }}
              ></i>
              <h4>Watch with a free Prime trial</h4>
            </div>
            <div class="film">
              <h2>Mark Antony</h2>
              <i
                class="fa-solid fa-film fa-lg pluss"
                style={{ color: "#6e6e6e" }}
              ></i>
              <i
                class="fa-solid fa-circle-plus plus"
                style={{ color: "#6d6a6a" }}
              ></i>
            </div>
            <div class="number">
              <h4>2023</h4>
              <h4>2 h 28 min</h4>
              <h4 className="number-btn">U/A 13+</h4>
            </div>
            {/* <h4 class="ranking">#9 in India</h4> */}
            <h4 class="details">
              Mark, a skilled mechanic and the son of a former gangster,
              stumbles upon a time travelling phone that can save...
            </h4>
          </div>
        </div>
      </div>

      <div class="card-container cord">
        <div>
          <div class="card-image">
            <img src={require("../../Image/thiru_product.webp")} />
          </div>
          <div class="display-none">
            <div class="watch">
              <i
                class="fa-solid fa-circle-check"
                style={{ color: "#0a60f5" }}
              ></i>
              <h4>Watch with a free Prime trial</h4>
            </div>
            <div class="film">
              <h2>Thiruchithrambalam</h2>
              <i
                class="fa-solid fa-film fa-lg pluss"
                style={{ color: "#6e6e6e" }}
              ></i>
              <i
                class="fa-solid fa-circle-plus plus"
                style={{ color: "#6d6a6a" }}
              ></i>
            </div>
            <div class="number">
              <h4>2023</h4>
              <h4>2 h 11 min</h4>
              <h4 className="number-btn">U/A 13+</h4>
            </div>
            {/* <h4 class="ranking">#9 in India</h4> */}
            <h4 class="details">
              A light-hearted tale about a food delivery guy Pazham, his breezy
              friendship with Sobhana & a quirky ...
            </h4>
          </div>
        </div>
      </div>

      <div class="card-container cord">
        <div>
          <div class="card-image">
            <img src={require("../../Image/pandi_product.webp")} />
          </div>
          <div class="display-none">
            <div class="watch">
              <i
                class="fa-solid fa-circle-check"
                style={{ color: "#0a60f5" }}
              ></i>
              <h4>Watch with a free Prime trial</h4>
            </div>
            <div class="film">
              <h2>Pilikkuthi Pandi</h2>
              <i
                class="fa-solid fa-film fa-lg pluss"
                style={{ color: "#6e6e6e" }}
              ></i>
              <i
                class="fa-solid fa-circle-plus plus"
                style={{ color: "#6d6a6a" }}
              ></i>
            </div>
            <div class="number">
              <h4>2023</h4>
              <h4>2 h 31 min</h4>
              <h4 className="number-btn">U/A 13+</h4>
            </div>
            <h4 class="ranking">#7 in India</h4>
            <h4 class="details">
              A young man named Pulikkuthi Pandi fights injustice while trying
              to wo...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
