import { Card } from '@/components/ui/card';
import useAnime from '@/lib/hooks/useAnime';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayIcon, StarIcon } from 'lucide-react';
import { Anime, RecentAnimeEpisode } from '@/lib/typings/anime';

export default function AnimeCard({ image, title, episodeNumber, id, episodeId, episodeTitle }: RecentAnimeEpisode) {

    return (
        <Card className="shrink-0 w-[200px] grow-1  lg:w-[250px] md:w-[200px] h-full">
            <div className="relative group">
                <Link href={`/watch/${episodeId}`} className="absolute inset-0 z-10" prefetch={false}>
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
                            <h3 className="text-md font-semibold text-gray-50 text-wrap">{title.english}</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-4">

                        <Button variant="outline" size="sm">
                                <PlayIcon className="w-4 h-4 mr-2" />
                                Episode {episodeNumber}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-md font-semibold text-gray-50 text-wrap">{title.english}</h3>

                        </div>
                        <div className="flex items-center gap-4 mt-4 text-secondary">
                           
                                Episode {episodeNumber}
                         
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
