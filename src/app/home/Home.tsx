"use client";

import RadialGradient from "@/components/magicui/radial-gradient";
import { TypewriterEffectSmoothDemo } from "@/components/component/typewriter-effect-demo";
import { motion } from "framer-motion";
import { ProfilePhoto } from "@/components/component/profile-photo";
import { FeaturedWorkBadge } from "@/components/component/featured-work-badge";
import Link from "next/link";
import { FeaturedWorkCard } from "@/components/component/featured-work-card";

export default function Home() {
  return (
    <main className="relative flex flex-col h-dvh w-full items-center justify-start bg-white dark:bg-[#0D0D11] md:shadow-xl z-10 gap-10">
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
              I am a developer who loves to build things for the web. I
              specialize in creating fast, responsive, and accessible websites.
              I am currently building at{" "}
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
      <section className="max-w-[740px] w-full px-4">
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="font-normal text-sm flex flex-col justify-start items-start gap-6"
        >
          <Link href="#" className="cursor-pointer">
            <FeaturedWorkBadge />
          </Link>
          <div>
            <FeaturedWorkCard />
          </div>
        </motion.div>
      </section>
      <RadialGradient className="top-0" />
    </main>
  );
}
