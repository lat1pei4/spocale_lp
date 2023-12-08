"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./hero.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// ... (import statements)

function Hero() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
      });
    }

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (firstText.current && secondText.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
  };

  return (
    <>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={"landing"}
      >
        <Navbar />
        <div className=" h-[100dvh] w-[110dvw] flex flex-nowrap kv relative">
          <Swiper
            spaceBetween={3000}
            centeredSlides={true}
            effect={"fade"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, EffectFade]}
            className="swiper_container_left"
            allowTouchMove={false}
            speed={5000}
          >
            <SwiperSlide>
              <div className="bg left_01"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg left_02"></div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={3000}
            centeredSlides={true}
            effect={"fade"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, EffectFade]}
            className="swiper_container_right"
            allowTouchMove={false}
            speed={5000}
          >
            <SwiperSlide>
              <div className="bg right_01"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg right_02"></div>
            </SwiperSlide>
          </Swiper>
          <Image
            src="/images/catch_copy.svg"
            alt="catch_copy"
            width={400}
            height={300}
            className="absolute top-1/2 left-[47%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </motion.main>
    </>
  );
}

export default Hero;
