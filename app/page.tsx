import Herosection from "./_componenets/herosection";
import Image from "next/image";
import Imagessection from "./_componenets/imagessection";
import Heritage from "./_componenets/heritage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Herosection />
      <Imagessection />
      <Heritage />
    </main>
  );
}
