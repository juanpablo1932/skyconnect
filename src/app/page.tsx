import GradientText from "@/components/GradientText";
import InputText from "@/components/InputText";
import SearchButton from "@/components/SearchButton";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-20 pb-30">
    <div>
    <GradientText text="SkyConnect Explorer" />
    </div>
    <div className="flex flex-col items-center justify-center gap-5">
      <InputText />
      <SearchButton />
    </div>


    </section>
  );
}
