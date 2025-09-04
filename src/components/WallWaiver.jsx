import React, { useEffect, useRef, useState } from 'react';
import './WallWaiver.css';
import Footer from './Footer';

const WaiverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11" />
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
      <h2 className={`wall-waiver-heading${visible ? ' animate' : ''}`}>Wall Waiver and IMLeagues</h2>
      <p className={`wall-waiver-text${visible ? ' animate' : ''}`}>
       To be a part of the club and climb on the outdoor wall, you must sign the wall waiver and register on IMLeagues. This is required for all members.
      </p>
      <div className="wall-waiver-separator">
        <a
        className={`wall-waiver-button${visible ? ' animate' : ''}`}
        href="https://waiver.smartwaiver.com/w/5a709bf63bfd5/web/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WaiverIcon />
        Sign Waiver
      </a>
      <a
        className={`wall-waiver-button${visible ? ' animate' : ''}`}
        href="https://waiver.smartwaiver.com/w/5a709bf63bfd5/web/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WaiverIcon />
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
