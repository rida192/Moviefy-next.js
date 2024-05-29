"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if window object is defined (i.e., if we are in the browser)
    if (typeof window !== "undefined") {
      const userPreference = localStorage.getItem("darkMode");
      // Check if userPreference is "enabled" or not
      setDarkMode(userPreference === "enabled");
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Update localStorage only if window object is defined
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    }
  };

  // Update UI on dark mode change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
