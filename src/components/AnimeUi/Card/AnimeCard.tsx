import { Card } from '@/components/ui/card';
import useAnime from '@/lib/hooks/useAnime';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayIcon, StarIcon } from 'lucide-react';
import { Anime } from '@/lib/typings/anime';
import HtmlText from '../HTMLText';

export default function AnimeCard({ image, id, title, description, rating }: Anime) {
    return (
        <Card className="shrink-0 w-[250px]  lg:w-[350px] md:w-[300px] h-full">
            <div className="relative group">
                <Link href={`/${id}`} className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                </Link>
                <Image
                    src={image}
                    alt="Anime Poster"
                    width={300}
                    height={400}
                    className="rounded-t-lg object-cover w-full aspect-[3/4] group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-50 text-wrap">{title.english}</h3>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <StarIcon className="w-5 h-5" />
                                <span>{rating}</span>
                            </div>
                        </div>
                        {/* <HtmlText className="text-gray-300 line-clamp-5 text-wrap">
                            {description}
                        </HtmlText> */}
                        <div className="flex items-center gap-4 mt-4">
                            <Button variant="outline" size="sm">
                                <PlayIcon className="w-4 h-4 mr-2" />
                                Watch Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-50 text-wrap">{title.english}</h3>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <StarIcon className="w-5 h-5" />
                                <span>{rating}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Card>
    )
}
