"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"
import { Anime } from "@/lib/typings/anime"
import { Button } from "../../ui/button"
import { Play } from "lucide-react"
import Link from "next/link"


export default function CarouselComponent({ results }: { results: Anime[] }) {
  return (
    <Carousel plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]} className="rounded-lg overflow-hidden">
      <CarouselContent>
        {
          results.map((item, index) => {
            return (
              <CarouselItem key={index + item.id}>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full group">
                  <Image
                    src={item.cover ? item.cover : "/placeholder.svg"}
                    alt="Anime Poster"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 group-hover:from-black/90 to-transparent transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 translate-y-5 group-hover:translate-y-0 group-hover:h transition-all  overflow-hidden">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-50">{item.title.english}</h2>
                    <div className=" max-sm:group-hover:overflow-auto group-hover:line-clamp-none line-clamp-3 mb-2 max-sm:max-h-[18rem]    ">
                      <p className="text-gray-300  mt-2  transition-all "
                        dangerouslySetInnerHTML={{ __html: item.description as string }}>
                      </p>
                    </div>
                    <div >
                      <Link href={item.id}>
                        <Button variant={"outline"} className="bg-transparent text-white hidden gap-2 group-hover:flex" > <Play></Play>  Play</Button>
                      </Link>
                    </div>

                  </div>

                </div>
              </CarouselItem>
            )
          })
        }


      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
