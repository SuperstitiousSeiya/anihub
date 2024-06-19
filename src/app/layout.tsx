import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import Navbar from "@/components/AnimeUi/Navbar"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className="pt-20">

          {children}
        </main>
      </body>
    </html>
  )
}
