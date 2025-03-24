import Image from 'next/image'
import GradientText from './GradientText'


export default function AirportCardContent({name, country, city, code} : {name: string, country: string | null, city: string, code: string}) {
  return (
    <div className='m-5 flex flex-col gap-2 sm:gap-8'>
      <Image
        className="absolute right-1 top-1 sm:right-2 sm:top-2 w-5 h-5 sm:w-10 sm:h-10"
        src={"/flight.png"}
        alt={"flight"}
        quality={100}
        width={40}
        height={40}
      />
      <div>
        <h2 className="text-2sm sm:text-2xl font-bold">{name}</h2>
        <p className="text-2sm sm:text-1xl">{country}, {city.split("/")[1]}</p>
      </div>
      <div>
        <GradientText text={code} size="text-2sm sm:text-4xl" />
      </div>
  </div>
  )
}
