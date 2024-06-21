import { Anime } from '@/lib/typings/anime'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function CategoryCard({ image, description, id, title }: Anime) {
    return (

        <Link href={`/${id}`}>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <Image src={image} alt="Anime 1" width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{title.english}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
