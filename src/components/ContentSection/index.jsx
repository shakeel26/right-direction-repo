import React from "react";
import "./contentSection.css";
import { Link } from "react-router-dom";
import { landingPageData } from "../../data";

export default function ContetnSection() {
  return (
    <div>
      {landingPageData.map((item) => (
        <>
          <div className="flex-center">
            <img className="item-image-name" src={`${process.env.PUBLIC_URL}/${item.styledTxtImg}`} alt="item-text" />
          </div>
          <div className="flex-center">
            <img className="item-image-name" src={item.descriptionImg} alt="item-text" />
          </div>
          <div>
            <div className="couple-img">
              <div>
                <Link to="/">
                  <img src={item.bannerImg1} alt="img" className="cloth-image" />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src={item.bannerImg2} alt="img" className="cloth-image" />
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
