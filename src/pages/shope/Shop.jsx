import React from "react";
import "./shop.css";

function Shop() {
  return (
    <div>
      <div className="shop-first-image-box">
        <img className="shop-first-image" src="/images/shop-page/shop-img-1.png" alt="img" />
        <h5>
          Right D<span className="c-white">irection</span>
        </h5>
      </div>
      {/* second section */}
      <div className="second-section">
        <div className="sec-image-left">
          <img className="sec-sect-image" src="/images/shop-page/shop-img-2.png" alt="img" />
        </div>
        <div className="sec-image-right">
          <img className="right-side-image" src="/images/shop-page/shop-img-3.png" alt="img" />
          <h5 className="second-sec-title">
            co-or
            <span className="c-white">
              d sets<span className="text-reposition"> & bags</span>
            </span>
          </h5>
        </div>
      </div>
      {/* Third Card section */}
      <div className="third-section">
        <h5 className="heading-third-sec">
          <span className="c-white">Coats</span> & Jackets
        </h5>
        <div className="third-sec-img-div">
          <img className="third-sec-img" src="/images/shop-page/shop-img-4.png" alt="img" />
        </div>
        <div className="third-sec-img-div">
          <img className="third-sec-img" src="/images/shop-page/shop-img-5.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
