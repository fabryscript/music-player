"use client";

import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import Discover from "@/components/Discover";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { useMusic } from "@/stores/useMusic";

export default function Home() {
  const { isPlaying } = useMusic()

  return (
    <main className={`${isPlaying ? "mb-[200px]" : "mb-[100px]"}`}>
      <Navbar />
      <Discover />
      <RecentlyPlayed />
      <BottomNav />
    </main>
  )
}
