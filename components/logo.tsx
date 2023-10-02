"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = ({ width, height }: { width?: number; height?: number }) => {
  const { systemTheme, theme } = useTheme();

  let src =
    systemTheme === "dark" || theme === "dark"
      ? "/web-logo-dark.png"
      : "/web-logo-light.png";
  return (
    <Image
      width={width ?? 80}
      height={height ?? 80}
      src={src}
      alt="Timo D. Logo"
      className={`rounded-full `}
    />
  );
};

export default Logo;
