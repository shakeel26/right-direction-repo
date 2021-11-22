import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-image-container">
          <img className="card-img" src={`${process.env.PUBLIC_URL}/images/outfit-image/0M6A6784.jpg`} alt="cloth" />
          <div className="card-btns-container">
            <button className="card-btn">Like</button>
            <button className="card-btn">Cart</button>
          </div>
        </div>
        <div>
          <h4 className="price-tag">asdas asdas adas asas d</h4>
          <h4 className="price-lag">721</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="card-image-container">
          <img className="card-img" src={`${process.env.PUBLIC_URL}/images/outfit-image/0M6A6784.jpg`} alt="cloth" />
          <div className="card-btns-container">
            <button className="card-btn">Like</button>
            <button className="card-btn">Cart</button>
          </div>
        </div>
        <div>
          <h4 className="price-tag">asdas asdas adas asas d</h4>
          <h4 className="price-lag">721</h4>
        </div>
      </div>
      {/* <div className="card-body">
        <div className="card-image-container">
          <img className="card-img" src={`${process.env.PUBLIC_URL}/images/images/outfit-image/0M6A6784.jpg`} alt="cloth" />
          <div className="card-btns-container">
            <button className="card-btn">Like</button>
            <button className="card-btn">Cart</button>
          </div>
        </div>
        <div>
          <h4 className="price-tag">asdas asdas adas asas d</h4>
          <h4 className="price-lag">721</h4>
        </div>
      </div> */}
      <div className="card-body">
        <div className="card-image-container">
          <img className="card-img" src={`${process.env.PUBLIC_URL}/images/outfit-image/0M6A6784.jpg`} alt="cloth" />
          <div className="card-btns-container">
            <button className="card-btn">Like</button>
            <button className="card-btn">Cart</button>
          </div>
        </div>
        <div>
          <h4 className="price-tag">asdas asdas adas asas d</h4>
          <h4 className="price-lag">721</h4>
        </div>
      </div>
    </div>
  );
}
