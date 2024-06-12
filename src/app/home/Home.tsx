"use client";

import RadialGradient from "@/components/magicui/radial-gradient";
import { TypewriterEffectSmoothDemo } from "@/components/component/typewriter-effect-demo";
import { motion } from "framer-motion";
import { ProfilePhoto } from "@/components/component/profile-photo";
import { FeaturedWorkBadge } from "@/components/component/featured-work-badge";
import Link from "next/link";
import { FeaturedWorkCard } from "@/components/component/featured-work-card";
import caveWebsite from "@/assets/cave-website.jpg";
import leafletWebsite from "@/assets/leaflet-website.jpg";

export default function Home() {
  const imageArray = [
    caveWebsite,
    leafletWebsite,
    caveWebsite,
    leafletWebsite,
    caveWebsite,
    leafletWebsite,
  ];

  return (
    <main className="relative flex flex-col h-dvh w-full items-center justify-start bg-white dark:bg-[#0D0D11] z-10 gap-4">
      <section className="w-full max-w-[740px] pt-36 px-4 flex flex-col justify-start items-start">
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfilePhoto />
          <div className="mb-6 pb-6 mt-6 pt-2 flex flex-col gap-4">
            <TypewriterEffectSmoothDemo />
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className=""
            >
              I love to build things for the web. I specialize in creating fast,
              responsive, and accessible websites. I am currently building at{" "}
              <Link
                href="https://cave-wine.vercel.app"
                className="text-blue-500 font-semibold"
              >
                Cave Technologies
              </Link>
              .
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="max-w-[740px] w-full">
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="font-normal text-sm flex flex-col justify-start items-start gap-6 mb-10"
        >
          <Link href="#" className="cursor-pointer">
            <FeaturedWorkBadge />
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center w-full max-w-[740px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <FeaturedWorkCard image={imageArray[i]} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <RadialGradient className="top-0" />
    </main>
  );
}
