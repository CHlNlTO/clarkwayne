"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export function FeaturedWorkCard({ image }: { image: StaticImageData }) {
  return (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="h-full w-full flex items-start justify-center"
    >
      <PinContainer
        title="Cave Technologies"
        href="https://cave-wine.vercel.app"
        className="p-0"
      >
        <Image
          className="rounded-lg"
          alt="Cave Technologies Website"
          width={1000}
          height={600}
          src={image.src}
        />
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black dark:text-slate-100">
            Cave Technologies
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              We offer seamless websites, putting businesses online.
            </span>
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
}
