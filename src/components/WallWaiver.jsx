import React, { useEffect, useRef, useState } from 'react';
import './WallWaiver.css';
import Footer from './Footer';

// Waiver / Document Icon
// Waiver / Document Icon
const WaiverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="#fff"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

// IMLeagues / Sports Team Icon
const IMLeaguesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="#fff"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
  </svg>
);


const WallWaiver = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`wall-waiver-container${visible ? ' animate' : ''}`}>
      <div className={`wall-waiver-logo${visible ? ' animate' : ''}`}>
        <img src="/logo_2.jpg" alt="Club Logo" />
      </div>
      <h2 className={`wall-waiver-heading${visible ? ' animate' : ''}`}>Sign Up</h2>
      <p className={`wall-waiver-text${visible ? ' animate' : ''}`}>
        Register on IMLeagues to join the club, and don’t forget to sign the wall waiver if you want to climb on the outdoor wall. It’s required for all members.
      </p>
      <div className="wall-waiver-separator">
        <a
          className={`wall-waiver-button${visible ? ' animate' : ''}`}
          href="https://waiver.smartwaiver.com/w/5a709bf63bfd5/web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WaiverIcon />
          Wall Waiver
        </a>
        <a
          className={`wall-waiver-button${visible ? ' animate' : ''}`}
          href="https://www.imleagues.com/spa/network/4395e0c781af4905a4088a9561509399/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IMLeaguesIcon />
          IMLeagues
        </a>
      </div>
      <p className={`wall-waiver-footer${visible ? ' animate' : ''}`}>
        © 2025 CCC. Built with React. All rights reserved.
      </p>
    </div>
  );
};

export default WallWaiver;
