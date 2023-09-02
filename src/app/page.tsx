"use client";

import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import Discover from "@/components/Discover";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { useMusic } from "@/stores/useMusic";

export default function Home() {
  const { currentlyPlaying: { infos, song } } = useMusic()

  return (
    <main className={`${infos && song ? "mb-[200px]" : "mb-[100px]"} overflow-hidden`}>
      <Navbar />
      <Discover />
      <RecentlyPlayed />
      <BottomNav />
    </main>
  )
}
