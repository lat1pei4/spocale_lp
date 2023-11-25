"use client";

import React, { userRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../css/hero.scss";
import Navbar from "@/components/Navbar";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

function Hero() {
  return (
    <>
      <Navbar />
      <div className=" h-[100dvh] relative">
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
      </div>
    </>
  );
}

export default Hero;
