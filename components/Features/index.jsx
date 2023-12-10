import React, { useRef } from "react";
import "./features.scss";
import { FEATURES } from "../../constants";
import gsap from "gsap";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

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

function Features() {
  // Gallery animation settings
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  // end of Gallery animation settings

  return (
    <div id="features">
      <div className="feat feat--01">
        <div className="feat--title regular-40">{FEATURES[0].title}</div>
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
          {FEATURES[2].title}
        </div>
        <div className="feat--content regular-24 w-[45dvw] p-10 bg-[#ebebeb] rounded-2xl rounded-r-none absolute bottom-5 right-0 z-[0.5]">
          {FEATURES[2].description}
        </div>
      </div>
      <div className="feat feat--04">
        <div className="h-[50dvh]">
          <div className="feat--title regular-40 absolute w-[550px] top-[15dvh] right-[5dvw] text-white">
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
  );
}

export default Features;
