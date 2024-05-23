import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center fixed p-0 top-[-1px] sm:top-0 sm:p-4 z-[100]">
      <nav className="rounded-none sm:rounded-full border-b sm:border sm:shadow-[0_4px_8px_rgba(0,0,0,0.03)] sm:dark:shadow-[0_4px_8px_rgba(0,0,0,0.2)] bg-white/60 dark:bg-gray-800/10 border-gray-300/50 dark:border-gray-400/10 p-3 backdrop-blur-md w-full m-auto max-w-[920px] flex justify-between items-center">
        <Button className="rounded-full bg-white/60 p-3 dark:bg-gray-800/10 text-[8px] sm:text-[10px] border border-gray-300/50 dark:border-gray-400/10 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-900/50 dark:hover:border-white/50 dark:hover:text-[#68b3ff] text-[#0073E5] dark:text-[#3399ff] font-bold h-8 w-8">
          CW
        </Button>
        <div className="flex items-center gap-4">
          <div className="hidden items-center sm:flex gap-4">
            <Link
              className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs"
              href="#"
            >
              Work
            </Link>
            <Link
              className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs"
              href="#"
            >
              Thoughts
            </Link>
            <Link
              className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-400 font-medium w-fit px-3 py-2 text-xs"
              href="#"
            >
              About
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
