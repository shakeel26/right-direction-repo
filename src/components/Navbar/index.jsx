import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { navList } from "../../data";
import { FaCartArrowDown } from "react-icons/fa";
import { RiCloseFill, RiBarChartHorizontalFill } from "react-icons/ri";
import Cart from "../Cart";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <div className="flex-space-between nav-container">
        <div className="is-mobile-view">{isClicked ? <RiCloseFill onClick={() => setIsClicked(false)} size={27} /> : <RiBarChartHorizontalFill onClick={() => setIsClicked(true)} size={27} />}</div>
        <div className={isClicked ? "flex-center nav-menu-list active-mobile-nav" : "flex-center nav-menu-list"}>
          {navList.map((item) => (
            <Link key={item.id} to={item.path} className="nav-item">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="nav-logo-center">
          <img className="nav-logo" src={`${process.env.PUBLIC_URL}/images/RD-3178x150.jpg`} alt="logo" />
        </div>
        <div>
          <FaCartArrowDown size={27} onClick={() => setIsCartOpen(!isCartOpen)} />
        </div>
      </div>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}
