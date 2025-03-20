import { inter } from "@/assets/font/font";
import React from "react";

export default function GradientText({ text }: { text: string }) {
  return (
    <h2 className={`${inter.className} text-7xl leading-normal bg-gradient-to-r bg-clip-text text-transparent font-bold from-blue-500 from-0% via-blue-400 via- to-cyan-300 to-75% w-max`}>
      {text}
    </h2>
  );
}