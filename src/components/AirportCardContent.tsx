import Image from 'next/image'
import GradientText from './GradientText'


export default function AirportCardContent({name, country, city, code} : {name: string, country: string | null, city: string, code: string}) {
  return (
    <div className='m-5 flex flex-col gap-8'>
      <Image
        className="absolute right-2 top-2"
        src={"/flight.png"}
        alt={"flight"}
        quality={100}
        width={40}
        height={40}
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{country}, {city.split("/")[1]}</p>
      </div>
      <div>
        <GradientText text={code} size="text-4xl" />
      </div>
  </div>
  )
}
