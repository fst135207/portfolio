import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import selfie from "@/public/selfie.jpg"

export function LeftSide() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <Avatar className="w-16 h-16 mb-4 sm:mb-0 sm:ml-4 md:ml-16 mt-4 sm:mt-16">
          <AvatarImage src={selfie.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold sm:ml-5 mt-2 sm:mt-16">
            Hi, I'm Felix
          </h1>
          <p className="text-sm sm:text-base sm:ml-5 mt-1">
            Im a Platform Engineer working currently at Identitas AG
          </p>
        </div>
      </div>
    </div>
  )
}