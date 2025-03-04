"use client";

import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { systemTheme, setTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-8 py-4">
      <Link href="/" className="text-lg font-bold">
        Grit의 블로그 🌱
      </Link>

      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-4 font-medium">
          <Link
            href="/blog"
            className={
              pathname.startsWith("/blog")
                ? "text-primary"
                : "transition-colors duration-200 ease-in-out"
            }
          >
            BLOG
          </Link>
          <Link
            href="/about"
            className={
              pathname.startsWith("/about")
                ? "text-primary"
                : "transition-colors duration-200 ease-in-out"
            }
          >
            ABOUT
          </Link>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/Grit03">
              <FaGithub />
              <span className="sr-only">github</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (currentTheme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            <LuSun className="absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <LuMoon className="absolute scale-0 rotate-90 text-xl transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
