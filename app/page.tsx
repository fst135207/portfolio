import { LeftSide } from "@/app/pages/LeftSide"
import { RightSide } from "@/app/pages/RightSide"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-8">
        <LeftSide />
        <RightSide />
      </div>
    </main>
  )
}