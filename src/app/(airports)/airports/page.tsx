import { getAirports } from "@/app/api/airports/route"
import ActionButton from "@/components/ActionButton";
import AirportsTable from "@/components/AirportsTable";
import GradientText from "@/components/GradientText";
import InputText from "@/components/InputText";
import Paginator from "@/components/Paginator";
import SearchButton from "@/components/SearchButton";
import Link from "next/link";


export default async function Airports({
  searchParams,
}: {
  searchParams?: Promise<{ offset?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const offset = resolvedSearchParams?.offset ?? "0";

  const res = await getAirports(offset);
  const totalPages = Math.ceil(res.pagination.total / 6);

  return (
    <>
      <section className="flex flex-row justify-center gap-20 pt-10">
        <div>
          <GradientText text="SkyConnect Explorer" size="text-4xl" />
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <InputText />
          <SearchButton />
          <Link href="/">
            <ActionButton />
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

