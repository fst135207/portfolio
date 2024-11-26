import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import selfie from "../public/selfie.jpg"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <main>
      <div className=" flex flex-row">
        <Avatar className="w-24 h-24 ml-16 mt-16">
          <AvatarImage src={selfie.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ml-16 mt-16">
            Hi, I'm Felix
          </h1>
          <p className="text-lm ml-16 mt-4">
            Im a Platform Engineer working currently at Identitas AG
          </p>
        </div>
      </div>
      <div>
        <Separator className="mt-5 "/>
      </div>


    </main>
  );
}
