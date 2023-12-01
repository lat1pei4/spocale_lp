import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimonialSlider.scss";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <section>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
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
                <p>{testimonial.content}</p>
                <div className="details">
                  <h3>
                    {testimonial.name} <br />
                    <span>{testimonial.role}</span>
                  </h3>
                </div>
              </div>
            </div>
            <div>haha</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
