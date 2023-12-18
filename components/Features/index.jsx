import React, { useRef } from "react";
import "./features.scss";
import { FEATURES, ICONS, LOGO_ANIMATION, GALLERY } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Commons/Title";
// import FeatureCard from "../Commons/FeatureCard/FeatureCard";

function Features({ isScreenOverMd }) {
  // Gallery animation settings
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const slider1 = [
    {
      color: "#e3e5e7",
      src: "g_x1_01.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x1_02.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x1_03.jpg",
    },
    {
      color: "#21242b",
      src: "g_x1_04.jpg",
    },
    {
      color: "#e3e5e7",
      src: "g_x1_05.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x1_06.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x1_07.jpg",
    },
    {
      color: "#21242b",
      src: "g_x1_08.jpg",
    },
  ];

  const slider2 = [
    {
      color: "#e3e5e7",
      src: "g_x2_01.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x2_02.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x2_03.jpg",
    },
    {
      color: "#21242b",
      src: "g_x2_04.jpg",
    },
    {
      color: "#e3e5e7",
      src: "g_x2_05.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x2_06.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x2_07.jpg",
    },
    {
      color: "#21242b",
      src: "g_x2_08.jpg",
    },
  ];

  const slider3 = [
    {
      color: "#e3e5e7",
      src: "g_x3_01.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x3_02.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x3_03.jpg",
    },
    {
      color: "#21242b",
      src: "g_x3_04.jpg",
    },
    {
      color: "#e3e5e7",
      src: "g_x3_05.jpg",
    },
    {
      color: "#d6d7dc",
      src: "g_x3_06.jpg",
    },
    {
      color: "#e3e3e3",
      src: "g_x3_07.jpg",
    },
    {
      color: "#21242b",
      src: "g_x3_08.jpg",
    },
  ];

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  // end of Gallery animation settings

  // Logo animation settings
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".iphone", { left: "-10%", top: "15%", rotation: 90 });
  gsap.set(".icons", { x: 350, y: 300, scale: 0, opacity: 0 });

  function iphoneAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 3 } });
    tl.to(".iphone", {
      left: "13%",
      rotation: 0,
      scale: 0.9,
      ease: "back",
    }).to(".iphone", {
      duration: 3,
      scale: 1,
    });
    return tl;
  }

  function iconAnimation() {
    const tl = gsap.timeline();
    tl.to(".icons", { duration: 0, opacity: 1 });
    return tl;
  }

  const startTime = 3;
  const masterTimeline = gsap.timeline();
  masterTimeline.add(iphoneAnimation()).add(iconAnimation(), startTime);

  LOGO_ANIMATION.forEach((animation, index) => {
    const { selector, duration, scale, x, y, ease } = animation;
    const element = document.querySelector(selector);
    masterTimeline.add(
      gsap.to(element, { duration, scale, x, y, ease }),
      startTime + (index % 3) / 2
    );
  });

  ScrollTrigger.create({
    animation: masterTimeline,
    trigger: ".feat--01",
    start: "80% bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: true,
  });

  // end of Logo animation settings

  return (
    isScreenOverMd && (
      <div id="features">
        <Title backgroundImage="bg-bg-feat">特徴</Title>
        <div className="feat feat--01">
          <div className="feat--title regular-40 text-white absolute top-[20dvh] w-[450px] left-[50dvw]">
            <span>{`0 ${FEATURES[0].id}`}</span>
            {FEATURES[0].title}
          </div>
          <div className="feat--content regular-24 w-[40dvw] p-10 bg-[#ebebeb] rounded-2xl absolute bottom-[40vh] left-[50dvw] z-[0.5]">
            {FEATURES[0].description}
          </div>
          <div className="animation">
            <Image
              src="/images/feat_01_phone.png"
              width={350}
              height={850}
              alt="feature 01 phone visual"
              className="iphone"
            />
            {ICONS.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={icon.src}
                  width="200"
                  height="200"
                  alt="leauge logo"
                  className="icons"
                  id={`logo_${index + 1}`}
                />
              );
            })}
          </div>
        </div>
        <div className="feat feat--02">
          <Image
            src="/images/feat_02_main.png"
            width={850}
            height={500}
            alt="feature 02 main visual"
            className="absolute left-0 top-[15dvh] z-[0.3]"
          />
          <div className="feat--title regular-40 absolute w-[40dvw] top-[15dvh] left-[30dvw] text-white">
            <span>{`0 ${FEATURES[1].id}`}</span>
            {FEATURES[1].title}
          </div>
          <div className="feat--content regular-24 w-[40dvw] p-10 pr-[8.5rem] bg-[#ebebeb] rounded-2xl absolute bottom-[15vh] right-[20vw] z-[0.5]">
            {FEATURES[1].description}
          </div>

          <Image
            src="/images/feat_02_phone.png"
            width={350}
            height={500}
            alt="feature 02 phone visual"
            className="absolute right-[3dvw] top-[10dvh] z-[1.5]"
          />
        </div>
        <div className="feat feat--03">
          <Image
            src="/images/feat_03_main_01.png"
            width={500}
            height={500}
            alt="feature 02 main visual"
            className="absolute right-[10dvw] top-[10dvh] z-[0.3]"
          />
          <Image
            src="/images/feat_03_main_02.png"
            width={550}
            height={500}
            alt="feature 02 main visual"
            className="absolute left-[10dvw] bottom-[10dvh] z-[0.3]"
          />
          <Image
            src="/images/feat_03_phone.png"
            width={350}
            height={500}
            alt="feature 02 phone visual"
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1.5]"
          />
          <div className="feat--title regular-40 w-[450px] absolute top-[10dvh] left-[15dvw] text-white">
            <span>{`0 ${FEATURES[2].id}`}</span>
            {FEATURES[2].title}
          </div>
          <div className="feat--content regular-24 w-[45dvw] p-10 bg-[#ebebeb] rounded-2xl rounded-r-none absolute bottom-5 right-0 z-[0.5]">
            {FEATURES[2].description}
          </div>
        </div>
        <div className="feat feat--04">
          <div className="h-[50dvh]">
            <div className="feat--title regular-40 absolute w-[550px] top-[15dvh] right-[5dvw] text-white">
              <span>{`0 ${FEATURES[3].id}`}</span>
              {FEATURES[3].title}
            </div>
            <div className="feat--content regular-24 w-[45dvw] p-10 bg-[#ebebeb] rounded-2xl rounded-l-none absolute top-[10dvh] left-0 z-[0.5]">
              {FEATURES[3].description}
            </div>
          </div>
          <div ref={container} className="galleryImages">
            <motion.div style={{ x: x1 }} className="gallery">
              {slider1.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="project"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="imageContainer">
                      <Image
                        fill={true}
                        alt={"image"}
                        src={`/images/gallery/${project.src}`}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div style={{ x: x2 }} className="gallery">
              {slider2.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="project"
                    style={{ backgroundColor: project.color }}
                  >
                    <div key={index} className="imageContainer">
                      <Image
                        fill={true}
                        alt={"image"}
                        src={`/images/gallery/${project.src}`}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div style={{ x: x3 }} className="gallery">
              {slider3.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="project"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="imageContainer">
                      <Image
                        fill={true}
                        alt={"image"}
                        src={`/images/gallery/${project.src}`}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    )
    // <div id="features">
    //   <FeatureCard />
    // </div>
  );
}

export default Features;
