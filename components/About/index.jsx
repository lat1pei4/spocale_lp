import Image from "next/image";
import React from "react";
import "./about.scss";
import Title from "../Commons/Title";

const About = () => {
  return (
    <section id="aboutUs">
      <Title
        backgroundImage="bg-bg-about"
        blue={true}
        className="flex justify-start"
      >
        スポカレとは
      </Title>
      <div className="flex flex-col overflow-hidden sm:flex-1">
        <div className="flex flex-col justify-center p-[10vmin] min-w-[375px] sm:w-[50vw] ">
          <h2 className="bold-24 sm:text-2xl lg:text-3xl ">
            国内外スポーツの観戦情報を集約！
          </h2>
          <p className="mt-5 regular-18 sm:text-xl lg:text-2xl">
            <span>掲載競技数は約100競技。</span>
            <br />
            <span>
              国内外のプロ・アマチュアスポーツを問わず1,500大会、50,000試合分の試合観戦情報を網羅しています。
            </span>
          </p>
        </div>
        <Image
          src="/images/phone.webp"
          alt="phone"
          width={1000}
          height={1000}
          className="hidden right-[-40%] bottom-[-10%] sm:absolute sm:block sm:right-[-30%] xl:right-[-15%] 2xl:right-[-7%]"
        />

        <Image
          src="/images/about_sp.webp"
          alt="phone"
          width={750}
          height={100}
          className="sm:hidden"
        />
      </div>
    </section>
  );
};

export default About;
