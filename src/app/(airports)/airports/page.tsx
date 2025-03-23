import AirportsTable from "@/components/AirportsTable";
import GradientText from "@/components/GradientText";
import InputDebounce from "@/components/InputDebounce";
import Paginator from "@/components/Paginator";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import Link from "next/link";


export default async function Airports({
  searchParams,
}: {
  searchParams?: Promise<{ offset?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const offset = resolvedSearchParams?.offset ?? "0";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/airports?offset=${offset}`
  ).then((res) => res.json());
  
  const totalPages = Math.ceil(res.pagination.total / 6);

  return (
    <>
      <section className="flex flex-row justify-center gap-20 pt-10">
        <div>
          <GradientText text="SkyConnect Explorer" size="text-4xl" />
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <InputDebounce />
          <Link href="/">
          <ButtonWithIcon icon="/hogar.png" text="Inicio" />
          </Link>
        </div>
      </section>
      <section className="flex flex-row justify-center flex-wrap gap-5 pt-10 ">
        <AirportsTable data={res.data} />
      </section>
      <section className="flex flex-row justify-center gap-5 pt-10">
        <Paginator totalPages={totalPages} />
      </section>
    </>
  );
}

