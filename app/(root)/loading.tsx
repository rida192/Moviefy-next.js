"use client";
import { useThemeContext } from "@/context/themeContext";

export default function Loading() {
  const { darkMode } = useThemeContext();

  return (
    <div
      className={`${
        darkMode ? "custom-loader" : "light-mode-loader"
      }   absolute top-1/2 left-1/2 -translate-x-1/2`}
    ></div>
  );
}
