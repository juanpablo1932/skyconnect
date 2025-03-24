import GradientText from "@/components/GradientText";
import InputText from "@/components/InputText";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import Link from "next/link";



export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-20 pb-30">
    <div>
    <GradientText text="SkyConnect Explorer" size=" text-2xl lg:text-7xl sm:text-4xl " />
    </div>
    <div className="flex flex-col items-center justify-center gap-5">
      <InputText />
      <Link href="/airports">
        <ButtonWithIcon icon='/Magnifer.png' text="Buscar" />
      </Link>
    </div>
    </section>
  );
}
