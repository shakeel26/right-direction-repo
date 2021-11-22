import React from "react";
import { Grid } from "@mui/material";
import ThreeSixty from "react-360-view";
import "./detailPage.css";

function DetailPage() {
  return (
    <div className="details-page">
      <h1 className="product-name-dpage">Product Name Here</h1>
      <Grid container spacing={2}>
        <Grid md={4} lg={4}>
          <div className="details-page-info">
            <div className="bordered-div info-label">Article Number</div>
            <details>
              <summary className="info-label">Details</summary>
              <p className="bordered-div-top">Mixing a retro allure with a futurist edge, a group of finely crafted leather garments stand out in a patchwork of 6 shades of brown mixed with All Over Moon engraved black. All lamb leather employed comes from dead stock – leftovers from past productions. The jacket for men likely features a complex construction inspired by anatomical cuts, searching to showcase excellent craftmanship. Its straight fit is highlighted by round in-seam pockets in the front and shaped sleeves with red accent elbow panels.</p>
            </details>
            <details>
              <summary className="info-label">Composition</summary>
              <p className="bordered-div-top">Mixing a retro allure with a futurist edge, a group of finely crafted leather garments stand out in a patchwork of 6 shades of brown mixed with All Over Moon engraved black. All lamb leather employed comes from dead stock – leftovers from past productions. The jacket for men likely features a complex construction inspired by anatomical cuts, searching to showcase excellent craftmanship. Its straight fit is highlighted by round in-seam pockets in the front and shaped sleeves with red accent elbow panels.</p>
            </details>
            <details>
              <summary className="info-label">Size Chart</summary>
              <p className="bordered-div-top">Mixing a retro allure with a futurist edge, a group of finely crafted leather garments stand out in a patchwork of 6 shades of brown mixed with All Over Moon engraved black. All lamb leather employed comes from dead stock – leftovers from past productions. The jacket for men likely features a complex construction inspired by anatomical cuts, searching to showcase excellent craftmanship. Its straight fit is highlighted by round in-seam pockets in the front and shaped sleeves with red accent elbow panels.</p>
            </details>
            <details>
              <summary className="info-label">Shiping and returns</summary>
              <p className="bordered-div-top">Mixing a retro allure with a futurist edge, a group of finely crafted leather garments stand out in a patchwork of 6 shades of brown mixed with All Over Moon engraved black. All lamb leather employed comes from dead stock – leftovers from past productions. The jacket for men likely features a complex construction inspired by anatomical cuts, searching to showcase excellent craftmanship. Its straight fit is highlighted by round in-seam pockets in the front and shaped sleeves with red accent elbow panels.</p>
            </details>
            <div className="flex-space-between dpage-price-sec">
              <span>Price :</span>
              <span>$ 24</span>
            </div>
            <div className="detail-size-container">
              <button className="size-btn size-btn-active">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
            </div>
            <div className="dpage-add-btn">add to cart</div>
          </div>
        </Grid>
        <Grid md={4} lg={4}>
          <ThreeSixty amount={36} spinReverse={true} imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36" fileName="chair_{index}.jpg?v1" autoplay={36} loop={4} />
        </Grid>
        <Grid md={4} lg={4}>
          <img className="dpage-p-image" src="/images/outfit-image/0M6A6784.jpg" alt="Data js" />
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailPage;
