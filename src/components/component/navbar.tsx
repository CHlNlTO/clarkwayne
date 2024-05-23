"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { FollowerPointerCard } from "../ui/following-pointer";
import { TitleComponent } from "./title-component";
import profile from "@/assets/profile.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center fixed p-0 left-0 *:top-[-1px] sm:top-0 sm:p-4 z-[100]">
      <motion.nav
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="rounded-none sm:rounded-full border-b sm:border sm:shadow-[0_4px_8px_rgba(0,0,0,0.03)] sm:dark:shadow-[0_4px_8px_rgba(0,0,0,0.2)] bg-white/60 dark:bg-gray-800/10 border-gray-300/50 dark:border-gray-400/10 p-3 backdrop-blur-md w-full m-auto max-w-[920px] flex justify-between items-center"
      >
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FollowerPointerCard
            title={<TitleComponent title="Clark Wayne" avatar={profile.src} />}
          >
            <Button className="rounded-full bg-white/60 p-3 dark:bg-gray-800/10 text-[8px] sm:text-[10px] border border-gray-300/50 dark:border-gray-400/10 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-900/50 dark:hover:border-white/50 dark:hover:text-[#68b3ff] text-[#0073E5] dark:text-[#3399ff] font-bold h-8 w-8 focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:focus-visible:ring-2 dark:focus-visible:ring-blue-500/60 cursor-none">
              CW
            </Button>
          </FollowerPointerCard>
        </motion.div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center sm:flex gap-4">
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                href="#"
              >
                Work
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                href="#"
              >
                Thoughts
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                href="#"
              >
                About
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row justify-center items-center gap-4 pr-2"
          >
            <Drawer>
              <DrawerTrigger className="flex sm:hidden">
                <Menu className="text-gray-800 dark:text-gray-400 active:text-gray-600 dark:active:text-white" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerClose>
                  <div className="flex flex-col gap-2 pt-4 pb-16 mx-auto max-w-[740px]">
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                        href="#"
                      >
                        Work
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                        href="#"
                      >
                        Thoughts
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs hover:text-gray-600 dark:hover:text-white"
                        href="#"
                      >
                        About
                      </Link>
                    </motion.div>
                  </div>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}
