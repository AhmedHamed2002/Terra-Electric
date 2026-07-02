"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-7 h-7 bg-black/5 dark:bg-white/5 rounded-full animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-7 h-7 cursor-pointer rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-blue-500 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 scale-100 transition-all dark:rotate-0" />
      ) : (
        <Moon className="w-4 h-4 scale-100 transition-all dark:rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
