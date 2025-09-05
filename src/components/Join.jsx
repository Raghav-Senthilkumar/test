import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Join.css";
import Text from "./Text";
import whiteHoldRight from "../assets/white_hold_2.png";
import whiteHoldLeft from "../assets/white_hold_1.png";

// SVGs as React components
import { ReactComponent as InstaIcon } from "../assets/insta_1.svg";
import { ReactComponent as GmailIcon } from "../assets/gmail_1.svg";
import { ReactComponent as FacebookIcon } from "../assets/GroupMe.svg";

export default function Join() {
  const iconsRef = useRef(null);
  const iconsInView = useInView(iconsRef, { once: true, margin: "-100px" });

  // Left image animation
  const scrollInLeft = {
    initial: { opacity: 0, x: -100, rotate: -10, scale: 0.8 },
    animate: {
      opacity: iconsInView ? 1 : 0,
      x: iconsInView ? 0 : -100,
      rotate: iconsInView ? 0 : -10,
      scale: iconsInView ? 1 : 0.8,
    },
    transition: { duration: 1.2, type: "spring", stiffness: 120 },
  };

  // Right image animation
  const scrollInRight = {
    initial: { opacity: 0, x: 100, rotate: 10, scale: 0.8 },
    animate: {
      opacity: iconsInView ? 1 : 0,
      x: iconsInView ? 0 : 100,
      rotate: iconsInView ? 0 : 10,
      scale: iconsInView ? 1 : 0.8,
    },
    transition: { duration: 1.2, type: "spring", stiffness: 120 },
  };

  return (
    <div className="join-container">
      {/* Left background */}
      <motion.img
        src={whiteHoldLeft}
        alt="left background"
        className="join-bg-left"
        initial={scrollInLeft.initial}
        animate={scrollInLeft.animate}
        transition={scrollInLeft.transition}
      />

      {/* Text content */}
      <div className="join-content">
        <Text
          highlight="Join Us"
          title="Join the Journey"
          description="For upcoming events and questions about the club, follow our Instagram and join our club-wide GroupMe"
          marginTop="100px"
          titleColor="#FFFFFF"
          descColor="#A5ABB6"
        />

        {/* Icons row */}
        <div className="join-icons" ref={iconsRef}>
          <InstaIcon className="join-icon" onClick={() => window.open("https://www.instagram.com/umdclubclimbing/?hl=en", "_blank")}/>
          <GmailIcon className="join-icon"   onClick={() => window.open("mailto:umdclubclimbing@gmail.com")}/>
          <FacebookIcon className="join-icon" onClick={() => window.open("https://groupme.com/join_group/49615654/IhDM4jOD", "_blank")}/>
        </div>
      </div>


      {/* Right background */}
      <motion.img
        src={whiteHoldRight}
        alt="right background"
        className="join-bg"
        initial={scrollInRight.initial}
        animate={scrollInRight.animate}
        transition={scrollInRight.transition}
      />
    </div>
  );
}
