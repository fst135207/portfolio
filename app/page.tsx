import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import selfie from "../public/selfie.jpg"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <main className="w-full h-auto p-4 sm:p-6 md:p-8"> {/* Added responsive padding */}
      <div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start"> {/* Made layout responsive */}
          <Avatar className="w-16 h-16 mb-4 sm:mb-0 sm:ml-4 md:ml-16 mt-4 sm:mt-16"> {/* Adjusted margins */}
            <AvatarImage src={selfie.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-center sm:text-left"> {/* Centered text on mobile */}
            <h1 className="text-xl sm:text-2xl font-bold sm:ml-5 mt-2 sm:mt-16">
              Hi, I'm Felix
            </h1>
            <p className="text-sm sm:text-base sm:ml-5 mt-1">
              Im a Platform Engineer working currently at Identitas AG
            </p>
          </div>
        </div>
      </div>
      <Separator className="mt-6" /> {/* Added margin top */}
    </main>
  );
}
