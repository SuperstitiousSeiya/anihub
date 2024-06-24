import { AnimeWatch } from '@/lib/typings/anime'
import React from 'react'

export default function VideoPlayer(props: AnimeWatch) {
    const { sources } = props;
    const defaultSource = sources?.find(source => source?.quality === "default");
   
    return (
        <div className="rounded-lg overflow-hidden">
            <video className="w-full aspect-video" src={defaultSource?.url} controls />
        </div>
    )
}
