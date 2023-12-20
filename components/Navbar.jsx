import { NAV_LINKS } from "@/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Button from "./Commons/Button";
import Rounded from "./Commons/RoundedButton";
import Magnetic from "./Commons/Magnetic";
import styles from "./style.module.scss";
import { useRef, useState, useEffect, useLayoutEffect, use } from "react";

function Navbar({ isScreenOverMd, deviceType }) {
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

  useEffect(() => {
    isScreenOverMd
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
  }, [isScreenOverMd]);

  return (
    <>
      <div className="flexBetween max-container padding-container gap-5 absolute z-30 py-5 inset-x-0 top-0">
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
          {NAV_LINKS.map((link) => (
            <Magnetic key={link.key}>
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
          ))}
        </ul>

        <Magnetic>
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
        </Magnetic>

        {/* <Image
          src="/images/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        /> */}
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
