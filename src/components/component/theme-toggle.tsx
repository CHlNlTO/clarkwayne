"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-white/60 p-2 dark:bg-gray-800/10 text-black dark:text-white text-[8px] border border-gray-300/50 dark:border-gray-400/10 flex justify-center items-center h-8 w-8 hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-900/50 dark:hover:border-white/50"
        >
          <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[150] bg-white/60 dark:bg-gray-800/10 backdrop-blur-md"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="focus:bg-gray-100 dark:focus:bg-white/5 text-gray-800 dark:text-gray-400 font-medium rounded-md"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="focus:bg-gray-100 dark:focus:bg-white/10 text-gray-800 dark:text-gray-400 font-medium rounded-md"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="focus:bg-gray-100 dark:focus:bg-white/5 text-gray-800 dark:text-gray-400 font-medium rounded-md"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
