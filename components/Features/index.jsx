import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./style.module.scss";
import { FEATURES, ICONS, LOGO_ANIMATION } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Commons/Title";

gsap.config({
  nullTargetWarn: false,
});

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

const applyAnimation = (
  triggerElement,
  targetElement,
  fromPosition,
  toPosition
) => {
  gsap.set(targetElement, {
    top: fromPosition,
    opacity: 0.2,
    filter: "blur(2px) grayscale(80%)",
  });

  gsap.to(targetElement, {
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
    },
    top: toPosition,
    opacity: 1,
    filter: "blur(0px) grayscale(0%)",
    ease: "ease-in",
  });
};

const createAnimation = () => {
  applyAnimation("#feat--02", ".phone--image2", "20%", "0%");
  applyAnimation("#feat--03", ".phone--image3", "60%", "50%");
};

function iconAnimation() {
  const tl = gsap.timeline();
  tl.to(".icons", { duration: 0, opacity: 1 });
  return tl;
}

function Features() {
  // Use useCallback to memoize the function
  const checkWidth = useCallback(() => {
    setIsScreenOverLg(window.innerWidth > 1024);
  }, []);

  const [isScreenOverLg, setIsScreenOverLg] = useState(false);
  useEffect(() => {
    checkWidth(); // Check once on mount
    window.addEventListener("resize", checkWidth); // Add resize listener
    return () => {
      window.removeEventListener("resize", checkWidth); // Clean up
    };
  }, [checkWidth]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sliders = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ];

  const xTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -150]),
    useTransform(scrollYProgress, [0, 1], [0, -300]),
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  gsap.set(".iphone", {
    left: "-10%",
    top: "15%",
    rotation: 90,
    filter: "blur(2px) grayscale(80%)",
  });
  gsap.set(".icons", { left: "15%", top: "40%", scale: 0, opacity: 0 });

  const masterTimeline = gsap.timeline();
  masterTimeline.add(iphoneAnimation()).add(iconAnimation(), 3);

  LOGO_ANIMATION.forEach((animation, index) => {
    const { selector, duration, scale, left, top, ease } = animation;
    const element = document.querySelector(selector);
    masterTimeline.add(
      gsap.to(element, { duration, scale, left, top, ease }),
      3 + (index % 3) / 2
    );
  });

  ScrollTrigger.create({
    animation: masterTimeline,
    trigger: "#feat--01",
    start: "80% bottom",
    end: "bottom bottom",
    scrub: 1,
  });

  const renderGallery = (sliderData, transform, index) => (
    <motion.div
      style={{ x: transform }}
      className={styles.gallery}
      key={`gallery-${index}`}
    >
      {sliderData.map((project, index) => (
        <div
          key={project.src}
          className={styles.project}
          style={{ backgroundColor: project.color }}
        >
          <div className={styles.imageContainer}>
            <Image
              fill={true}
              alt={"image"}
              src={`/images/gallery/${project.src}`}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div id="features" className={styles.features}>
      <Title backgroundImage="bg-bg-feat">特徴</Title>
      <div id="feat--01" className={`${styles.feat} ${styles["feat--01"]}`}>
        <span
          className={`hidden md:block absolute w-[85vw] md:w-[45vw] right-2 xl:left-[45vw] ${styles["seq--num"]}`}
        >{`0 ${FEATURES[0].id}`}</span>
        <div className="feat--title pr-8 bold-24 md:regular-40 text-[#284c68] absolute top-[10vh] w-[85vw] md:w-[45vw] right-2 xl:left-[50vw]">
          {FEATURES[0].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[60vw] md:w-[40vw] p-4 sm:p-10 bg-[#ebebeb] rounded-2xl absolute top-[75vh] md:top-[50vh] right-2 xl:left-[50vw] z-[1]">
          &emsp;{FEATURES[0].description}
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
          </div>
        ) : (
          <Image
            src="/images/feat_01_phone.webp"
            width={250}
            height={500}
            style={{ width: "250px", height: "500px" }}
            alt="feature 01 phone visual"
            className="absolute left-[10vw] top-[25vh]"
          />
        )}
      </div>
      <div id="feat--02" className={`${styles.feat} ${styles["feat--02"]}`}>
        <Image
          src="/images/feat_02_main.webp"
          width={850}
          height={500}
          alt="feature 02 main visual"
          className=" absolute left-0 top-[15vh] z-[0.3]"
        />
        <span
          className={`hidden md:block absolute w-[60vw] xl:w-[40vw] left-[25vw] ${styles["seq--num"]}`}
        >{`0 ${FEATURES[1].id}`}</span>
        <div className="feat--title bold-24 md:regular-40 absolute w-[60vw] xl:w-[40vw] top-[10vh] left-[30vw] text-[#284c68]">
          {FEATURES[1].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[80vw] md:w-[40vw] p-4 md:p-10 xl:pr-[8.5rem] bg-[#ebebeb] rounded-2xl absolute bottom-[15vh] right-[0] xl:right-[20vw] z-[0.5]">
          &emsp;{FEATURES[1].description}
        </div>

        <Image
          src="/images/feat_02_phone.webp"
          width={350}
          height={690}
          alt="feature 02 phone visual"
          className="hidden xl:block absolute right-[3vw] top-[10vh] z-[1.5] phone--image2"
        />
      </div>
      <div id="feat--03" className={`${styles.feat} ${styles["feat--03"]}`}>
        <Image
          src="/images/feat_03_main_01.webp"
          width={500}
          height={500}
          alt="feature 02 main visual"
          className="absolute right-[10vw] top-[10vh] z-[0.3]"
        />
        <Image
          src="/images/feat_03_main_02.webp"
          width={550}
          height={390}
          alt="feature 02 main visual"
          className="hidden md:block absolute left-[10vw] bottom-[10vh] z-[0.3]"
        />
        <Image
          src="/images/feat_03_phone.webp"
          width={350}
          height={500}
          alt="feature 03 phone visual"
          className="hidden xl:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1.5] phone--image3"
        />
        <span
          className={`hidden md:block absolute top-[0vh] left-[2vw] ${styles["seq--num"]}`}
        >{`0 ${FEATURES[2].id}`}</span>
        <div className="feat--title bold-24 md:regular-40 w-[65vw] md:w-[30vw] absolute top-[10vh] left-[7vw] text-[#284c68]">
          {FEATURES[2].title}
        </div>
        <div className="feat--content regular-20 md:regular-24 w-[85vw] md:w-[45vw] p-4 md:p-10 bg-[#ebebeb] rounded-2xl rounded-r-none absolute bottom-[15vh] md:bottom-5 right-0 z-[0.5]">
          &emsp;{FEATURES[2].description}
        </div>
      </div>
      <div className={`${styles.feat} ${styles["feat--04"]}`}>
        <div className="h-[50vh]">
          <span
            className={`hidden md:block absolute top-[5vh] right-[35vw] xl:right-[45vw] ${styles["seq--num"]}`}
          >{`0 ${FEATURES[3].id}`}</span>
          <div className="feat--title bold-24 md:regular-40 absolute w-[80vw] md:w-[45vw] pr-10 top-[0vh] md:top-[15vh] right-0 xl:right-[5vw] text-[#284c68]">
            {FEATURES[3].title}
          </div>
          <div className="feat--content regular-20 md:regular-24 w-[80vw] md:w-[45vw] p-4 md:p-10 bg-[#ebebeb] rounded-2xl rounded-l-none absolute top-[15vh] md:top-[-5vh] xl:top-[10vh] left-0 z-[0.5]">
            &emsp;{FEATURES[3].description}
          </div>
        </div>
        <div ref={container} className={styles.galleryImages}>
          {sliders.map((slider, index) =>
            renderGallery(slider, xTransforms[index], index)
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
