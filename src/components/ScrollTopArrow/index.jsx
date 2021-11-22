import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollTopArrow.css";

export default function ScrollTopArrow() {
  const [showArrow, setShowArrow] = useState(false);
  const handleScroll = () => {
    window.scroll(0, 0);
  };

  const handleCountScroll = () => {
    if (window.scrollY > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleCountScroll);
    return () => window.addEventListener("scroll", handleCountScroll);
  }, []);

  return (
    showArrow && (
      <button onClick={handleScroll} className="scroll-to-top-btn">
        <FaArrowUp size={18} />
      </button>
    )
  );
}
