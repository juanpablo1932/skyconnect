import Image from 'next/image'

export default function ButtonWithIcon({icon, text}: {icon: string, text: string}) {
  return (
    <>
      <button className='bg-gradient-to-r from-blue-700 from-0% via-blue-400 via- to-cyan-300 to-75% text-white rounded-md py-1 flex items-center w-[10rem] h-10 gap-4 pl-6 opacity-90 border-white border-1 cursor-pointer'>
        <Image src={icon} alt='icon' width={30} height={10} />
        {text}
      </button>
    </>
  )
}
