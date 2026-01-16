"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

function getTimeLeft(target: Date) {
  const now = new Date().getTime()
  const diff = target.getTime() - now
  if (diff <= 0) return "00:00:00:00"
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return [days, hours, minutes, seconds]
    .map((v) => String(v).padStart(2, "0"))
    .join(":")
}
export default function Navbar() {
  const targetDate = new Date("2026-02-06T00:00:00")
  const [time, setTime] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="fixed top-[43px] left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex items-center justify-between
          w-[1400px] h-[64px]
          rounded-xl
          border border-white/30
          bg-white/[0.01]
          backdrop-blur-xl
          px-10
        "
      >
        <div className="flex h-20 w-20 items-center justify-center">
            <Image
                src="/icon.png"
                alt="DevSoc Logo"
                width={35}
                height={35}
                className="object-contain"
            />
            </div>
        <div className="flex items-center gap-12 text-sm tracking-wide text-white/100 font-bold">
          <a href="about" className="hover:text-white transition">
            ABOUT
          </a>
          <a href="timeline" className="hover:text-white transition">
            TIMELINE
          </a>
          <a href="tracks" className="hover:text-white transition">
            TRACKS
          </a>
          <a href="sponsors" className="hover:text-white transition">
            SPONSORS
          </a>
        </div>
        <div
          className="
            rounded-xl
            border border-white/15
            bg-white/[0.01]
            px-3 py-1
            font-mono text-3xl text-white
            backdrop-blur-lg
          "
        >
          {time}
        </div>
      </div>
    </nav>
  )
}