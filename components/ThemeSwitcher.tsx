"use client";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; //!avoid rehidration errors

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger
          className="transition duration-1000"
          value="light"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger
          className="transition duration-1000"
          value="dark"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
        <TabsTrigger
          className="transition duration-1000"
          value="system"
          onClick={() => setTheme("system")}
        >
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
