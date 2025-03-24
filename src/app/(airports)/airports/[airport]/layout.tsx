import GradientText from "@/components/GradientText";
import Tabs from "@/components/Tabs";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ airport: string }>
}) {
  const {airport} = await params;

  const decodedAirport = decodeURIComponent(airport);

  return (
    <>
    <section className="flex flex-row justify-center pt-8">
      <GradientText text={decodedAirport} size=" text-2xl lg:text-7xl sm:text-4xl" />
    </section>
    <section className="pt-8 max-w-7xl mx-auto">
      <Tabs/>
    </section>
    <section className="pt-0 max-w-7xl mx-auto sm:pt-10">
      {children}
    </section>
    </>
  )
}
