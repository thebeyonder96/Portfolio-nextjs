"use client";

import { useThemeStore } from "@/store/theme-store";
import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme,setTheme } = useThemeStore();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [setTheme]);

  return (
    <button
      className="cursor-pointer fixed bottom-5 right-5 bg-white/40 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-gray-200 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}