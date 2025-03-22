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
      <GradientText text={decodedAirport} size="text-7xl" />
    </section>
    <section className="pt-8 w-7xl mx-auto">
      <Tabs/>
    </section>
    <section className="pt-10 w-7xl mx-auto">
      {children}
    </section>
    </>
  )
}
