"use client";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

export function ProfilePhoto() {
  return (
    <div className="relative rounded-xl">
      <Link
        href="#"
        className="h-16 w-16 rounded-full flex items-end justify-center transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin border border-gray-200 bg-gradient-to-b from-blue-600/50 hover:border-blue-400 dark:border-gray-800/40 dark:from-blue-400 dark:to-blue-900 dark:hover:border-blue-400/40 focus:scroll-pt-24 overflow-clip relative"
      >
        <Image
          src={profile}
          width={400}
          height={200}
          className="absolute bottom-[-10%] scale-90"
          alt="Clark Wayne's photo"
        ></Image>
        <BorderBeam size={100} duration={3} delay={9} />
      </Link>
    </div>
  );
}
