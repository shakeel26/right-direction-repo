import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/Card";
import "./productsPage.css";

function Products() {
  return (
    <div className="products-page-paddding">
      <h1 className="products-heading">Products Section</h1>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
