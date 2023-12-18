import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./featureCard.scss";

function FeatureCard() {
  // Refs for DOM elements
  const buttonRef = useRef(null);
  const reverseRef = useRef(null);

  useEffect(() => {
    // GSAP animation timeline
    let t1 = gsap.timeline({ paused: true, reversed: true });

    t1.to(buttonRef.current, {
      ease: "power1.inOut",
      rotate: 90,
      duration: 0.1,
    })
      .to(buttonRef.current, {
        ease: "power1.inOut",
        y: -10,
        opacity: 0,
        duration: 0.2,
      })
      .to(buttonRef.current, {
        ease: "power1.inOut",
        yPercent: 114,
        duration: 0.2,
      })
      .to(
        buttonRef.current,
        {
          ease: "power1.inOut",
          yPercent: 166,
          borderRadius: 0,
          scaleX: 10,
          scaleY: 2.6,
        },
        "-=0.1"
      )
      .to(".top", { ease: "power1.inOut", height: 380 }, "-=0.1")
      .to(
        ".top img",
        { ease: "power1.inOut", scale: 1.2, yPercent: 40 },
        "-=0.1"
      )
      .from(".next-screen", {
        ease: "power1.inOut",
        yPercent: 100,
        duration: 0.25,
      })
      .from(".next-screen svg", {
        ease: "power1.inOut",
        xPercent: -250,
        duration: 0.25,
      })
      .from(".next-screen h1", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.15,
      })
      .from(".header", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.15,
      })
      .from(".next-screen p", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.15,
      })
      .to(".container", {
        ease: "power1.inOut",
        backgroundColor: "#101010",
        duration: 0.05,
      })
      .to(".next-screen", {
        ease: "power1.inOut",
        yPercent: -10,
        duration: 0.5,
      })
      .to(".next-screen", { ease: "power1.inOut", yPercent: 0, duration: 0.5 });

    // Event listeners for click events
    buttonRef.current.addEventListener("click", () => t1.play());
    reverseRef.current.addEventListener("click", () => t1.reverse());

    return () => {
      // Cleanup event listeners
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", () => t1.play());
      }
      if (reverseRef.current) {
        reverseRef.current.removeEventListener("click", () => t1.reverse());
      }
    };
  }, []);

  return (
    <div className="cardContainer">
      <div className="featureCard">
        <div className="next-screen" ref={reverseRef}>
          <svg
            className="reverse bi bi-arrow-bar-left"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <h2>
            <span>Portrait</span>
            <br />
            Photography
          </h2>
          <div className="header"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div className="screen-1">
          <div className="top">
            <h1>
              <span>Portrait</span>
              <br />
              Photography
            </h1>
          </div>
          <div className="button" ref={buttonRef}>
            <svg
              className="bi bi-arrow-bar-right"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
