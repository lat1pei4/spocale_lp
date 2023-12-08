import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIALS } from "@/constants";
import Title from "../Commons/Title";
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
      <section className="testimonial">
        <Title backgroundImage="bg-bg-review">ユーザーの声</Title>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          slidesPerView={"5"}
          centeredSlides={true}
          initialSlide={2}
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
