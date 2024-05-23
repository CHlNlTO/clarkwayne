"use client";

import RadialGradient from "@/components/magicui/radial-gradient";
import Link from "next/link";
import profile from "@/assets/profile.jpg";
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "@/components/component/typewriter-effect-demo";
import { motion } from "framer-motion";
import { ProfilePhoto } from "@/components/component/profile-photo";

export default function Home() {
  return (
    <main className="relative flex flex-col h-dvh w-full items-center justify-start bg-white dark:bg-[#0D0D11] md:shadow-xl z-10">
      <section className="w-full max-w-[740px] pt-36 px-4 pb-10 flex flex-col justify-start items-start">
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfilePhoto />
          <TypewriterEffectSmoothDemo />
        </motion.div>
      </section>
      <RadialGradient className="top-0" />
    </main>
  );
}
