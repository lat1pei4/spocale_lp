import React from "react";
import "./achievement.scss";
import Image from "next/image";

function Achievement() {
  return (
    <div className="w-full h-[90dvh] bg-blue flex justify-center items-center">
      <div class="achievement__container ">
        <div class="item i1 flex justify-center items-center">
          <Image
            src="/images/acheive_1_w.svg"
            alt="acheivement"
            width={500}
            height={500}
          />
        </div>
        <div class="item i2 flex justify-center items-center">
          {" "}
          <Image
            src="/images/acheive_2_w.svg"
            alt="acheivement"
            width={300}
            height={500}
          />
        </div>
        <div class="item i3 flex justify-center items-center"></div>
        <div class="item i4 flex justify-center items-center"></div>
        <div class="item i5 flex justify-center items-center"></div>
      </div>
    </div>
  );
}

export default Achievement;
