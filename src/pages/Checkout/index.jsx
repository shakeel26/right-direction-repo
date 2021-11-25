import React from "react";
import "./checkout.css";
import { Grid, Container } from "@mui/material";
import StripeElement from "../../components/StripeElement";

function Checkout() {
  return (
    <div className="checkout-page-container">
      <Container>
        <Grid container>
          <Grid item md={7}>
            <h2 className="checkout-brand-name">Right Direction</h2>
            <div className="flex-space-between" style={{ paddingRight: 10 }}>
              <div>Contect Information</div>
              <div>Already have an account ? login</div>
            </div>

            <input className="checkout-input my-7" type="text" placeholder="Email or mobile phone number" />
            <div>
              <div>Contect Information</div>
              <div className="flex-input-box">
                <input className="checkout-input my-7" type="text" placeholder="First Name" />
                <input className="checkout-input my-7" type="text" placeholder="Last Name" />
              </div>
              <input className="checkout-input my-7" type="text" placeholder="Address" />
              <input className="checkout-input my-7" type="text" placeholder="Appartment" />
              <input className="checkout-input my-7" type="text" placeholder="City" />
              <div className="flex-input-box">
                <input className="checkout-input my-7" type="text" placeholder="Country/region" />
                <input className="checkout-input my-7" type="text" placeholder="Postal Code" />
              </div>
              <div>
                <StripeElement />
              </div>
              {/* <div>
                <button className="checkout-pbtn">Continue to shopping ?</button>
              </div> */}
            </div>
          </Grid>
          <Grid item md={5} className="checkout-right-side">
            <div className="items-list-container">
              <div className="div-card">
                <div className="checkout-cimg">
                  <img height="70" width="70" src="/images/shop-page/shop-img-4.png" alt="item-image" />
                </div>
                <div className="checkout-cinfo">
                  <p>Blue lace long shoes</p>
                  <p>M-L/blue</p>
                </div>
                <div>delte</div>
              </div>
            </div>
            <hr />
            <div className="flex-space-between checkout-total-price">
              <div>Total Price</div>
              <div>$44</div>
            </div>
            <hr />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Checkout;
