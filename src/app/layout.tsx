import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import Navbar from "@/components/AnimeUi/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
import '@/components/styles/component.css'


interface Props {
  children: React.ReactNode,
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </ThemeProvider>

      </body>
    </html>
  )
}
