import GradientText from "@/components/GradientText";
import InputText from "@/components/InputText";
import SearchButton from "@/components/SearchButton";
import Link from "next/link";



export default async function Home() {



  return (
    <section className="flex flex-col items-center justify-center h-screen gap-20 pb-30">
    <div>
    <GradientText text="SkyConnect Explorer" size="text-7xl" />
    </div>
    <div className="flex flex-col items-center justify-center gap-5">
      <InputText />
      <Link href="/airports">
        <SearchButton />
      </Link>
    </div>
    </section>
  );
}
