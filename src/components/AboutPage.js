import React, { useState, useEffect } from 'react';
import './AboutPage.css'; // Ensure this path is correct

const AboutPage = () => {
    const images = [
        "/A.png", // Image directly in public folder
        "/B.PNG",
        "/C.PNG",
        "/D.png",
        "/E.jpg",
        "/F.jpg",
        // ...other images
    ];

    // Assuming 0 is the current image, the last one will be the previous, and 1 will be the next initially
    const [currentImage, setCurrentImage] = useState(0);
    const [prevImage, setPrevImage] = useState(images.length - 1);
    const [nextImage, setNextImage] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevCurrent) => {
                // Calculate the previous and next image indexes
                const prev = (prevCurrent - 1 + images.length) % images.length;
                const next = (prevCurrent + 1) % images.length;
                
                // Update the previous and next states
                setPrevImage(prev);
                setNextImage(next);

                // Return the new current image
                return next;
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, [images.length]);

    return (
        <div className="about-container">
            <h1 className="about-header">About SMART SENTRY</h1>
            <div className="slideshow-container">
                {images.map((img, index) => {
                    let className = 'slide';
                    if (index === currentImage) {
                        className += ' active';
                    } else if (index === prevImage) {
                        className += ' prev';
                    } else if (index === nextImage) {
                        className += ' next';
                    }

                    return (
                        <img
                            key={index}
                            src={`${process.env.PUBLIC_URL}${img}`}
                            alt={`Slide ${index}`}
                            className={className}
                        />
                    );
                })}
            </div>
            <div className="about-text">
  <p>
    SMART SENTRY is an innovative, integrated security solution designed to offer unparalleled protection for your smart home environment. Combining the latest advancements in machine learning, blockchain technology, and sophisticated sensor arrays, SMART SENTRY delivers a comprehensive monitoring and alarm system that stands guard against a variety of threats.
  </p>

  <h2>Our System's Four-Tiered Approach</h2>

  <div className="feature-section left-aligned">
  <h3>1. Intruder and Abnormal Behavior Detection</h3>
  <p>
    Utilizing advanced CCTV analytics powered by machine learning algorithms, our system identifies potential intrusions and unusual activities in real time, offering a proactive approach to home security.
  </p>
</div>

<div className="feature-section right-aligned">
  <h3>2. Abnormal Sound Detection</h3>
  <p>
    Our cutting-edge microphone arrays, alongside intelligent machine learning models, detect anomalous sounds, providing an additional layer of security that ensures peace and safety within your home.
  </p>
</div>

<div className="feature-section left-aligned">
  <h3>3. Network Attack Detection</h3>
  <p>
    In an age where digital threats are as prevalent as physical ones, our machine learning-driven network analysis tools constantly scan for unusual network traffic, helping to thwart cyber attacks before they can compromise your home's digital integrity.
  </p>
</div>

<div className="feature-section right-aligned">
  <h3>4. Secure Data Communication</h3>
  <p>
    Leveraging the robustness of blockchain technology and a smart 'plugbase', we ensure that all communication within the system is encrypted and secure, protecting your data from unauthorized access and enhancing overall system reliability.
  </p>
</div>

  <p>
    SMART SENTRY is not just a product, it's a promise of safety, a bulwark against breaches, and a guardian of tranquility. Embrace the future of home security with SMART SENTRY, where intelligence meets integrity.
  </p>
</div>

            <div className="about-highlight">
                <p>Check back for updates on our latest research findings.</p>
            </div>
        </div>
    );
};

export default AboutPage;
