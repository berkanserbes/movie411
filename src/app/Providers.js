"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:text-white dark:bg-black text-black transition-colors duration-300 min-h-screen select-none z-10">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
