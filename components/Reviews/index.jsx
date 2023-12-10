import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEWS } from "@/constants";
import Title from "../Commons/Title";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./reviews.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

function index() {
  return (
    <>
      <section id="reviews">
        <Title backgroundImage="bg-bg-review">ユーザーの声</Title>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
          id="swiper"
        >
          {REVIEWS.map((testimonial, index) => (
            <SwiperSlide id="swiper-slide" key={index}>
              <div className="testimonialBox">
                <Image
                  src="/images/quote.png"
                  className="quote"
                  alt=""
                  width="50"
                  height="50"
                  style={{ height: 50, width: 50 }}
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
