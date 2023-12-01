import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NAV_LINKS, TESTIMONIALS } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonial.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

function index() {
  return (
    <>
      <section>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          id="swiper"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide id="swiper-slide" key={index}>
              <div className="testimonialBox">
                <Image
                  src="/images/quote.png"
                  className="quote"
                  alt=""
                  width="50"
                  height="50"
                />
                <div className="content">
                  <h2>{testimonial.title}</h2>
                  <p>{testimonial.content}</p>
                  <div className="details">
                    <h3>
                      {testimonial.name} <br />
                      <span>{testimonial.date}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default index;
