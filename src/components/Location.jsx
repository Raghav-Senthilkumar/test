import React, { useRef, useEffect, useState } from "react";
import iphoneFrame from "../assets/iphone15.png";
import pin from "../assets/Pin.png";
import "./Location.css";

export default function Location() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
    <div className="location-container" ref={containerRef}>
      <div className={`Location ${visible ? "in-view" : ""}`}>
        <div className="text">
          <h2>Location/Times</h2>
          <h1>Club Meetings</h1>
          <span className="info">
            We have club meetings at the ERC Climbing Wall, located outside of the Eppley Recreation Center, every Sunday, Tuesday, and Thursday from 8–10 PM to connect and climb.
          </span>
          <br />
          <a
            href="https://www.google.com/maps/place/ERC+Climbing+Wall/@38.9942976,-76.9456925,19.74z/data=!4m6!3m5!1s0x89b7c69eb76f0bcb:0xd4c9d1463d18c841!8m2!3d38.9941981!4d-76.9458185!16s%2Fg%2F11bzwqrsvk?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <img src={pin} alt="Map Pin" />
            <span>Open Map</span>
          </a>
        </div>

        <div className="phone-wrapper">
          <div className="map-mask">
            <iframe
              title="Eppley Recreation Center Map"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99229.6545660806!2d-77.02821850895909!3d38.994169122715405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b7c69eb76f0bcb%3A0xd4c9d1463d18c841!2sERC%20Climbing%20Wall%2C%20College%20Park%2C%20MD!3m2!1d38.9941981!2d-76.9458185!4m5!1s0x89b7c69eb76f0bcb%3A0xd4c9d1463d18c841!2sCollege%20Park%2C%20MD%2020742!3m2!1d38.9941981!2d-76.9458185!5e0!3m2!1sen!2sus!4v1756990464054!5m2!1sen!2sus"
              width="100%"
              height="98%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
 
          <img
            className="phone-frame"
            src={iphoneFrame}
            alt="iPhone 15 frame"
          />
        </div>
      </div>
    </div>
  );
}
