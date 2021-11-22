import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuItemLink: {
    paddingLeft: "20px",
    color: "black",
  },

  logo: {
    width: 500,
    height: 150,
  },
  activeNavLink: {
    borderBottom: "10px solid black",
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <AppBar className={classes.navBar} position="sticky" color="default">
      <Toolbar>
        <Grid justify={"space-between"} container>
          <Grid item md={4} className={classes.menuItems}>
            <Link className={`${classes.menuItemLink} ${location === "/" ? classes.activeNavLink : ""}`} to="/" variant="button" underline="none">
              Home
            </Link>

            <Link className={`${classes.menuItemLink} ${location === "/shop" ? classes.activeNavLink : ""}`} to="/shop" variant="button" underline="none">
              Shop
            </Link>

            <Link className={`${classes.menuItemLink} ${location === "/about" ? classes.activeNavLink : ""}`} to="/about" variant="button" underline="none">
              About
            </Link>

            <Link className={`${classes.menuItemLink} ${location === "/contact" ? classes.activeNavLink : ""}`} to="/contact" variant="button" underline="none">
              Contact
            </Link>
          </Grid>

          <Grid item md={4}>
            <img className={classes.logo} src={process.env.PUBLIC_URL + "/assets/landing-page/logo.jpg"} alt="" />
          </Grid>
          <Grid item md={4} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
