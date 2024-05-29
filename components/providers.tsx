"use client";

import { BookmarkProvider } from "@/context/bookmarkContext";
import { ThemeProvider } from "@/context/themeContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <BookmarkProvider>{children}</BookmarkProvider>
    </ThemeProvider>
  );
};

export default Providers;
