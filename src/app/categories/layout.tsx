"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { ScrollArea } from '@radix-ui/react-scroll-area'
export default function CategoriesLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()

  const navlinks = [
    { name: "Popular", href: "/categories" },
    { name: "Trending", href: "/categories/trending" },
    { name: "Recent Animes", href: "/categories/recent" },
    { name: "Genres", href: "/categories/genres" },
  ]



  return (
    <div className="flex flex-col xl:flex-row gap-8 p-4 md:p-8 relative max-h-screen ">
      <div className="bg-card rounded-lg shadow-lg p-6 xl:w-1/2 min-w-48 w-full text-primary sticky top-16 z-10">
        <h2 className="text-xl font-bold mb-4">Explore Anime</h2>
        <nav className="space-y-2">
          {
            navlinks.map((item, index) => {
              return (
                <Link key={index} href={item.href} className={cn("block text-secondary hover:text-primary",
                  pathname == item.href ? "text-primary" : "text-gray-500"
                )} prefetch={false}>
                  {item.name}
                </Link>
              )
            })
          }
        </nav>
      </div>
      <ScrollArea>
        <div className="pb-4">

          {children}


        </div>
      </ScrollArea>
    </div>
  )
}
