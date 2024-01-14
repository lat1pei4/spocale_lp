import React, { useEffect, useState, useRef } from "react";
import "./features.scss";
import { FEATURES, ICONS, LOGO_ANIMATION } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Commons/Title";

gsap.config({
  nullTargetWarn: false,
});

function Features() {
  // Gallery animation settings
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const slider1 = [
    {
      color: "#e3e5e7",
      src: "g_x1_01.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x1_02.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x1_03.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x1_04.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x1_05.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x1_06.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x1_07.webp",
    },
    {
      color: "#21242b",
      src: "g_x1_08.webp",
    },
  ];

  const slider2 = [
    {
      color: "#e3e5e7",
      src: "g_x2_01.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x2_02.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x2_03.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x2_04.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x2_05.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x2_06.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x2_07.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x2_08.webp",
    },
  ];

  const slider3 = [
    {
      color: "#e3e5e7",
      src: "g_x3_01.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x3_02.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x3_03.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x3_04.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x3_05.webp",
    },
    {
      color: "#d6d7dc",
      src: "g_x3_06.webp",
    },
    {
      color: "#e3e3e3",
      src: "g_x3_07.webp",
    },
    {
      color: "#e3e5e7",
      src: "g_x3_08.webp",
    },
  ];

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  // end of Gallery animation settings

  // Logo animation settings
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".iphone", {
    left: "-10%",
    top: "15%",
    rotation: 90,
    filter: "blur(2px) grayscale(80%)",
  });
  gsap.set(".icons", { left: "15%", top: "40%", scale: 0, opacity: 0 });

  const [isScreenOverLg, setIsScreenOverLg] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsScreenOverLg(window.innerWidth > 1024);
    };

    checkWidth(); // Check once on mount

    window.addEventListener("resize", checkWidth); // Add resize listener

    return () => {
      window.removeEventListener("resize", checkWidth); // Clean up
    };
  }, [isScreenOverLg]);

  function iphoneAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 3 } });
    tl.to(".iphone", {
      left: "15%",
      rotation: 0,
      scale: 0.9,
      ease: "back",
      filter: "blur(0px) grayscale(0%)",
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
    const { selector, duration, scale, left, top, ease } = animation;
    const element = document.querySelector(selector);
    masterTimeline.add(
      gsap.to(element, { duration, scale, left, top, ease }),
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
    <div id="features">
      <Title backgroundImage="bg-bg-feat">特徴</Title>
      <div className="feat feat--01">
        <div className="feat--title bold-24 md:regular-40 text-[#284c68] absolute top-[10dvh] w-[85dvw] md:w-[45dvw] right-2 xl:left-[50dvw]">
          <span className="hidden md:block">{`0 ${FEATURES[0].id}`}</span>
          {FEATURES[0].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[60dvw] md:w-[40dvw] p-4 sm:p-10 bg-[#ebebeb] rounded-2xl absolute top-[75dvh] md:top-[50dvh] right-2 xl:left-[50dvw] z-[1]">
          {FEATURES[0].description}
        </div>
        {isScreenOverLg ? (
          <div className="animation">
            <Image
              src="/images/feat_01_phone.webp"
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
            x``
          </div>
        ) : (
          <Image
            src="/images/feat_01_phone.webp"
            width={250}
            height={500}
            style={{ width: "250px", height: "500px" }}
            alt="feature 01 phone visual"
            className="absolute left-[10dvw] top-[35dvh]"
          />
        )}
      </div>
      <div className="feat feat--02">
        <Image
          src="/images/feat_02_main.webp"
          width={850}
          height={500}
          alt="feature 02 main visual"
          className=" absolute left-0 top-[15dvh] z-[0.3]"
        />
        <div className="feat--title bold-24 md:regular-40 absolute w-[60dvw] xl:w-[40dvw] top-[10dvh] left-[30dvw] text-[#284c68]">
          <span className="hidden md:block">{`0 ${FEATURES[1].id}`}</span>
          {FEATURES[1].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[80dvw] md:w-[40dvw] p-4 md:p-10 xl:pr-[8.5rem] bg-[#ebebeb] rounded-2xl absolute bottom-[15vh] right-[0] xl:right-[20vw] z-[0.5]">
          {FEATURES[1].description}
        </div>

        <Image
          src="/images/feat_02_phone.webp"
          width={350}
          height={690}
          alt="feature 02 phone visual"
          className="hidden xl:block absolute right-[3dvw] top-[10dvh] z-[1.5]"
        />
      </div>
      <div className="feat feat--03">
        <Image
          src="/images/feat_03_main_01.webp"
          width={500}
          height={500}
          alt="feature 02 main visual"
          className="absolute right-[10dvw] top-[10dvh] z-[0.3]"
        />
        <Image
          src="/images/feat_03_main_02.webp"
          width={550}
          height={390}
          alt="feature 02 main visual"
          className="hidden md:block absolute left-[10dvw] bottom-[10dvh] z-[0.3]"
        />
        <Image
          src="/images/feat_03_phone.webp"
          width={350}
          height={500}
          alt="feature 03 phone visual"
          className="hidden xl:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1.5]"
        />
        <div className="feat--title bold-24 md:regular-40 w-[65dvw] md:w-[30dvw] absolute top-[0dvh] left-[10dvw] text-[#284c68]">
          <span className="hidden md:block">{`0 ${FEATURES[2].id}`}</span>
          {FEATURES[2].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[85dvw] md:w-[45dvw] p-4 md:p-10 bg-[#ebebeb] rounded-2xl rounded-r-none absolute bottom-[15dvh] md:bottom-5 right-0 z-[0.5]">
          {FEATURES[2].description}
        </div>
      </div>
      <div className="feat feat--04">
        <div className="h-[50dvh]">
          <div className="feat--title bold-24 md:regular-40 absolute w-[80dvw] md:w-[45dvw] pr-10 top-[0dvh] md:top-[15dvh] right-0 xl:right-[5dvw] text-[#284c68]">
            <span className="hidden md:block">{`0 ${FEATURES[3].id}`}</span>
            {FEATURES[3].title}
          </div>
          <div className="feat--content regular-20 md:regular-24 w-[80dvw] md:w-[45dvw] p-4 md:p-10 bg-[#ebebeb] rounded-2xl rounded-l-none absolute top-[15dvh] md:top-[-5dvh] xl:top-[10dvh] left-0 z-[0.5]">
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
  );
}

export default Features;
