"use client";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Fade in={isVisible}>
      <button
        className="fixed bottom-4 right-8 p-1 rounded-full border-2 border-magenta text-magenta hover:border-plum hover:text-plum"
        onClick={scrollToTop}
      >
        <KeyboardArrowUpRoundedIcon fontSize="medium" />
      </button>
    </Fade>
  );
};

export default ScrollToTopButton;
