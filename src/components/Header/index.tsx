"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const [logoWidth, setLogoWidth] = useState<number>(18);
  const [logoHeight, setLogoHeight] = useState<number>(18);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
      if (isSmallScreen) {
        setLogoWidth(24);
        setLogoHeight(24);
      } else {
        setLogoWidth(48);
        setLogoHeight(48);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-80 md:h-96 relative">
      <Image
        className="absolute w-full h-full z-0"
        src={"/jordan-desktop.svg"}
        objectFit="cover"
        fill={true}
        alt="Jordan Image"
      />

      <div className="absolute z-10 px-6 py-24 xl:pl-80 text-dark-30 flex flex-col gap-10">
        <div className="flex items-center gap-2 text-lg">
          <Image
            src={"/logo-jordan.svg"}
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
          />
          <span className="font-medium text-lg md:text-2xl">JordanShoes</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-medium">
            A melhor loja de Jordan
          </h1>
          <p className="text-base sm:text-lg md:text-2xl">
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </div>
  );
};
