import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./animation";
import Links from "./Links";
import Curve from "./Curve";
import Footer from "./Footer";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Index({ deviceType, onClose }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Menu</p>
          </div>
          {NAV_LINKS.map((data, index) => (
            <Links
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              onNavigate={onClose}
            />
          ))}
        </div>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Download</p>
          </div>
          <div className="flex flex-1 flex-wrap gap-5">
            {deviceType === "Mobile" ? (
              <>
                <Link
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwieoI7B4ZeDAxWZglYBHTvgAjIQFnoECBoQAQ&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.spocale.android%26hl%3Dja%26gl%3DUS&usg=AOvVaw05wCXUdx7RsCE1B6HNQqD9&opi=89978449
"
                >
                  <Image
                    src="/images/playstore.webp"
                    alt="play store download qr code"
                    width="160"
                    height="50"
                  />
                </Link>
                <Link href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9D%E3%82%AB%E3%83%AC/id1337649882">
                  <Image
                    src="/images/appstore.webp"
                    alt="app store download qr code"
                    width="150"
                    height="50"
                  />
                </Link>
              </>
            ) : (
              <>
                <Image
                  src="/images/an_qrcode.webp"
                  alt="play store download qr code"
                  width="150"
                  height="150"
                />
                <Image
                  src="/images/ios_qrcode.webp"
                  alt="app store download qr code"
                  width="150"
                  height="150"
                />
              </>
            )}
          </div>
        </div>
        <div className="hidden sm:flex flex-col text-[2rem] gap-[12px] mt-[30px]">
          <div className={styles.header}>
            <p>Links</p>
          </div>
          <Footer />
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
