import Image from "next/image"
export default function CardPhone(){
    return (
        <div className="z-30 *:z-30 px-20">
            <div className="2xl:h-[550px] lg:h-96 h-96 relative z-30 2xl:w-72 lg:w-52 w-44 border-[10px] border-[#2c2c2c] bg-white flex flex-col justify-between p-1 lg:rounded-4xl rounded-3xl">
            <div className="w-full flex justify-between px-2 *:text-xs items-center">
                <span>09:41</span>
                <div className="lg:w-20 w-12 lg:h-6 h-3 bg-[#2c2c2c] flex flex-col rounded-full"></div>
                <span>Quinta</span>
            </div>
           <div className="h-full space-y-1 overflow-hidden py-5 px-1 *:rounded-lg">
           <Image src={'/images/investidor.jpg'} width={500} height={500} alt="startup" className="w-full 2xl:h-28 lg:h-24 object-cover" />
            <Image src={'/images/startup.jpg'} width={500} height={500} alt="startup" className="w-full 2xl:h-28 lg:h-24 object-cover" />
            <Image src={'/images/talento.jpg'} width={500} height={500} alt="startup" className="w-full 2xl:h-28 lg:h-24 object-cover" />
           </div>
           <div className="2xl:w-52 lg:w-40 z-30 absolute 2xl:h-28 lg:h-28 h-20 top-20 flex items-end bg-white 2xl:-left-40 lg:-left-32 -left-20 rounded-lg shadow-2xl px-3 py-1">
            <div className=""></div>
            <div className="w-full flex items-end justify-between *:rounded-t-md">
               <div className="">
               <div className="bg-[#2c2c2c]/50 lg:h-8 h-6 2xl:w-8 lg:w-6 w-4"></div>
               <span className="text-xs">10%</span>
               </div>
               <div className="">
               <div className="bg-[#2c2c2c]/50 lg:h-10 h-8 2xl:w-8 lg:w-6 w-4"></div>
               <span className="text-xs">10%</span>
               </div>
               <div className="">
               <div className="bg-[#2c2c2c] lg:h-14 h-10 2xl:w-8 lg:w-6 w-4"></div>
               <span className="text-xs">10%</span>
               </div>
               <div className="">
               <div className="bg-[#2c2c2c]/50 lg:h-5 h-4 2xl:w-8 lg:w-6 w-4"></div>
               <span className="text-xs">10%</span>
               </div>
                
            </div>
           </div>

           <div className="w-28 z-30 absolute 2xl:h-28 lg:h-20 2xl:top-72 top-52 -right-20 size-20 lg:top-60 bg-[#2c2c2c] 2xl:-right-20 lg:-right-16 rounded-lg"></div>
            </div>
        </div>
    )
}