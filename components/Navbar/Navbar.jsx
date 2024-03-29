import { NAV_LINKS } from "@/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "../Nav";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Button from "../Commons/Button";
import Rounded from "../Commons/RoundedButton";
import Magnetic from "../Commons/Magnetic";
import styles from "./style.module.scss";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

function Navbar({ deviceType }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(
    (isActive) => {
      isActive && setIsActive(false);
    },
    [pathname, isActive]
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  const [isScreenOverLg, setIsScreenOverLg] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsScreenOverLg(window.innerWidth > 1024);
    };

    checkWidth(); // Check once on mount

    window.addEventListener("resize", checkWidth); // Add resize listener

    return () => {
      window.removeEventListener("resize", checkWidth); // Clean up
    };
  }, [isScreenOverLg]);

  useEffect(() => {
    isScreenOverLg
      ? gsap.to(button.current, {
          scale: 0,
          duration: 0.25,
          ease: "power1.out",
        })
      : gsap.to(button.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
  }, [isScreenOverLg]);

  return (
    <>
      <div className="flexBetween max-container padding-container gap-5 absolute z-[2] py-5 inset-x-0 top-0">
        <Link href="/">
          <Image
            src="images/logo_w.svg"
            alt="logo"
            width={210}
            height={40}
            className="h-auto w-[125px] md:w-[150px] lg:w-[200px]"
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map(
            (link, index) =>
              index !== 0 && (
                <li key={link.key}>
                  <Magnetic>
                    <div className={styles.el}>
                      <Link
                        href={link.href}
                        className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                      >
                        {link.label}
                      </Link>
                      <div className={styles.indicator}></div>
                    </div>
                  </Magnetic>
                </li>
              )
          )}
        </ul>

        <div className="xl:flexCenter hidden">
          <Link href="#footer">
            <Button
              type="button"
              title="無料ダウンロード"
              icon="/images/downloads.webp"
              variant="btn_dark_green"
            />
          </Link>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${
            deviceType === "Mobile" ? styles.buttonSmall : styles.button
          } z-10`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            } z-11`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav deviceType={deviceType} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
