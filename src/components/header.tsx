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
    <header className="z-40 flex items-center justify-between border px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        Grit의 개발 블로그 🌱
      </Link>

      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-4 font-medium">
          <Link
            href="/blog"
            className={
              pathname.startsWith("/blog")
                ? "text-green-600 dark:text-green-300"
                : "transition-colors duration-200 ease-in-out hover:text-green-600 dark:hover:text-green-300"
            }
          >
            BLOG
          </Link>
          <Link
            href="/about"
            className={
              pathname.startsWith("/about")
                ? "text-green-600 dark:text-green-300"
                : "transition-colors duration-200 ease-in-out hover:text-green-600 dark:hover:text-green-300"
            }
          >
            ABOUT
          </Link>
        </div>
        <div className="flex gap-1">
          <Link href="https://github.com/Grit03">
            <Button variant="ghost" size="icon">
              <FaGithub />
              <span className="sr-only">github</span>
            </Button>
          </Link>
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
            <LuSun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <LuMoon className="absolute rotate-90 scale-0 text-xl transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
