import Herosection from "./_componenets/herosection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Herosection />
      <div className=" w-full text-center flex flex-col items-center justify-center">
        <h1 className=" text-3xl py-4">
          Some memories is hold closest to my heart
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className=" w-[200px] h-[200px] rounded-sm shadow-sm shadow-black overflow-hidden"
            >
              <Image
                alt="img"
                src={`/images/img${index + 1}.jpg`}
                width={200}
                height={200}
                className=" w-[200px] h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
