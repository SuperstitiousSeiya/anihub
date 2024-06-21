import React from 'react'


import Image from "next/image"
import { AnimeInfo } from '@/lib/typings/anime'
import HtmlText from '@/components/AnimeUi/HTMLText'


export default function AnimeInfoTitle({ title, image, cover, description }: AnimeInfo) {
    return (
        <div className="relative py-10">
            <Image
                src={cover}
                alt="Cover Image"
                width={1200}
                height={200}
                className="rounded-lg object-cover w-full  h-full absolute bottom-0 -z-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 rounded-lg -z-10" />
            <div className=" inset-0 flex flex-col justify-center w-full h-full  z-40  space-y-2 text-white px-10 items-center lg:items-start">
                <Image src={image} alt={title?.english!} width={200} height={200} className="aspect-[9/12] h-auto  w-[15rem] rounded-lg object-cover" />
                <h1 className="text-3xl font-bold">{title.userPreferred ? title.userPreferred : title.english}</h1>
                <HtmlText>{description}</HtmlText>
            </div>
        </div>
    )
}
