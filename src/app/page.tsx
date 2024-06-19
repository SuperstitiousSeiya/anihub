

import Link from "next/link"

import HeroCarousel from "@/components/anime/main/HeroCarousel"

import PopularCards from "@/components/anime/main/Popular";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TrendingCards from "@/components/anime/main/TrendingCards";
import RecentAnimeCards from "@/components/anime/main/RecentAnimeCards";


export default async function HomePage() {


  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <div className="container mx-auto mt-4">
        <HeroCarousel />
      </div>

      <section className="py-12 md:py-16 space-y-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Anime</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View More
            </Link>
          </div>
          <ScrollArea>
            <div className="flex gap-10 pb-2">
              <PopularCards />
            </div>
            <ScrollBar orientation="horizontal" className="bg-background" />
          </ScrollArea>

        </div>

        <div className="container mx-auto ">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Anime</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View More
            </Link>
          </div>
          <ScrollArea>
            <div className="flex gap-10 pb-2">
              <TrendingCards />
            </div>
            <ScrollBar orientation="horizontal" className="bg-background" />
          </ScrollArea>

        </div>
      </section>
      {/* Recent Anime Cards  */}

      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Recent Anime</h2>
          <Link href="#" className="text-primary hover:text-primary-500 transition-colors" prefetch={false}>
            View All
          </Link>
        </div>
        <div className="flex gap-10 pb-2 flex-wrap justify-center">
          <RecentAnimeCards />
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Anime by Genre</h2>
          <Link href="#" className="text-primary hover:text-primary-500 transition-colors" prefetch={false}>
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <ActivityIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Action</span>
          </Link>
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <LaughIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Comedy</span>
          </Link>
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <DramaIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Drama</span>
          </Link>
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <HeartCrackIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Romance</span>
          </Link>
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <FigmaIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Fantasy</span>
          </Link>
          <Link
            href="#"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            <SpaceIcon className="w-8 h-8 text-primary" />
            <span className="text-sm md:text-base font-medium">Sci-Fi</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function DramaIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 11h.01" />
      <path d="M14 6h.01" />
      <path d="M18 6h.01" />
      <path d="M6.5 13.1h.01" />
      <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
      <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
      <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
      <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
    </svg>
  )
}


function FigmaIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function HeartCrackIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="m12 13-1-1 2-2-3-3 2-2" />
    </svg>
  )
}


function LaughIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SpaceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}