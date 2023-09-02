import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import React from 'react'

const rubik = Rubik({ weight: [ "300" ,"400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Music Player',
  description: 'Created by fabryscript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#20233E]`}>{children}</body>
    </html>
  )
}
