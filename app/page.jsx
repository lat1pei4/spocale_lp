"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Achievement from "@/components/Achievement";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const [isScreenOverMd, setIsScreenOverMd] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsScreenOverMd(window.innerWidth > 768);
    };

    checkWidth(); // Check once on mount

    window.addEventListener("resize", checkWidth); // Add resize listener

    return () => {
      window.removeEventListener("resize", checkWidth); // Clean up
    };
  }, [isScreenOverMd]);

  const [deviceType, setDeviceType] = useState("Desktop");
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    setDeviceType(isMobile ? "Mobile" : "Desktop");
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {
        <>
          <Hero isScreenOverMd={isScreenOverMd} deviceType={deviceType} />
          <About />
          <Features />
          <Achievement />
          <Reviews />
          <Faq />
          <Footer deviceType={deviceType} />
        </>
      }
    </main>
  );
}
