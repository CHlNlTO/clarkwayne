"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "guise!",
    },
    {
      text: "I'm",
    },
    {
      text: "Clark",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Wayne,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "a",
    },
    {
      text: "full-stack",
    },
    {
      text: "developer",
    },
    {
      text: "and",
    },
    {
      text: "designer.",
    },
  ];
  return (
    <div className="z-10 whitespace-pre-wrap text-center text-md font-medium tracking-tighter text-black dark:text-white">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
