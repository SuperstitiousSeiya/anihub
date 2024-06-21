import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Recommendation } from '@/lib/typings/anime'
export default function AnimeCardWithGenre(recommendation: Recommendation) {
    const {id, title, image, cover, type} = recommendation


    return (
        <div className="relative group">
            <Link href={`/${id}`} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Anime</span>
            </Link>
            <Image
                src={image}
                alt="Attack on Titan"
                width={200}
                height={300}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 py-2">
                <h3 className="font-semibold tracking-tight">{title.userPreferred}</h3>
                <small className="text-sm leading-none text-muted-foreground">{type}</small>
            </div>
        </div>
    )
}
