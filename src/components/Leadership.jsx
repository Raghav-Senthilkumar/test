import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'; 
import './leader.css';
import climbingbigHold from '../assets/big_hold.png'; 
import climbingsmallHold from '../assets/small_hold.png'; 

// Import a unique image for each leader.
import skylarImage from '/ccc-climbing-club-skylar.jpg';
import benjaminImage from '/ccc-climbing-club-ben.jpg'; 
import amudhaImage from '/ccc-climbing-club-amudha.jpg';
import jackieImage from '/ccc-climbing-club-jackie.jpg';
import nicholasImage from '/ccc-climbing-club-nicholas.jpg'; 
import lexieImage from  '/ccc-climbing-club-lexie.jpg';

// Updated data with a unique image for each leader.
const leadershipData = [
  { pres: "PRESIDENT", firstname: "SKYLAR", lastname: "STRICKLER", hobby: "Favorite climb: Ones with rocks", image: skylarImage },
  { pres: "TREASURER", firstname: "BENJAMIN", lastname: "KIM", hobby: "Favorite climb: Competition Style", image: benjaminImage },
  { pres: "VICE PRESIDENT", firstname: "AMUDHA", lastname: "KRISHNAN", hobby: "Favorite climb: Bouldering", image: amudhaImage },
  { pres: "SECRETARY", firstname: "JACKIE", lastname: "TESTERMAN", hobby: "Favorite climb: Overhang", image: jackieImage },
  { pres: "GEAR MANAGER", firstname: "NICHOLAS", lastname: "COLOMEY", hobby: "Favorite climb: Winter mountaineering", image: nicholasImage },
  { pres: "SOCIAL CHAIR", firstname: "LEXIE", lastname: "LEONG", hobby: "Favorite climb: Ones w/ dynamic moves", image: lexieImage },
];

export default function LeadershipHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPerson = leadershipData[currentIndex];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipData.length);
  };

  // Framer Motion variants for spring animations
  const springVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { y: -40, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <div>
      <div className="box">
  {/* Background with animation */}
  <AnimatePresence mode="wait">
  <motion.div
    key={currentPerson.image}
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    exit={{ opacity: 0, scale: 0.95, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${currentPerson.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "inherit",
      zIndex: 0,
      boxShadow: "0 0 15px 3px rgba(255, 255, 255, 0.12)"
    }}
  />
</AnimatePresence>


        {/* AnimatePresence for title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.pres}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`title ${
              currentPerson.pres === 'SOCIAL CHAIR' || currentPerson.pres === 'VICE PRESIDENT'
              || currentPerson.pres === 'GEAR MANAGER' ? 'long-title' : ''
            }`}
          >
            <h1>{currentPerson.pres}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate firstname */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.firstname}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="firstname"
          >
            <h1>{currentPerson.firstname}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate lastname */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.lastname}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lastname"
          >
            <h1>{currentPerson.lastname}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Animate hobbies */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerson.hobby}
            variants={springVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="hobbies"
          >
            <h1>{currentPerson.hobby}</h1>
          </motion.div>
        </AnimatePresence>

    
{/* Big Hold */}
<AnimatePresence mode="wait">
  <motion.img
    key={currentPerson.pres + "-big"} // unique key per leader
    src={climbingbigHold}
    alt="Big Climbing Hold"
    className="big"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    exit={{ y: -40, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    whileHover={{ scale: 1.15, rotate: 8, y: -15 }}
  />
</AnimatePresence>

{/* Small Hold */}
<AnimatePresence mode="wait">
  <motion.img
    key={currentPerson.pres + "-small"} // unique key per leader
    src={climbingsmallHold}
    alt="Small Climbing Hold"
    className="small"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    exit={{ y: -40, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    whileHover={{ scale: 1.15, rotate: 8, y: -15 }}
  />
</AnimatePresence>


        {/* Arrow button */}
        <div className="arrow-container" onClick={handleClick}>
          <div className="white-arrow"></div>
        </div>
      </div>
    </div>
  );
};
