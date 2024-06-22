"use client"

import React, { useState } from 'react'
import CharactersCard from './compo/CharactersCard'
import { AnimeInfo } from '@/lib/typings/anime'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export default function AnimeOverview({ characters }: AnimeInfo) {
    const [collapsed, setCollapsed] = useState(false);



    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className='w-full'>
            <h2 className="text-2xl font-bold mb-4" >Overview</h2>
            <div className="grid gap-4 ">
                <div className='relative'>
                    <h3 className="text-lg font-bold mb-4">Characters</h3>
                    <div className={cn("flex flex-wrap gap-4  overflow-hidden", collapsed ? "max-h-auto" : "max-h-[13rem]  shadow-lg")}>
                        {characters.map((character, i) => (
                            <CharactersCard key={i} {...character} />
                        ))}
                    </div>
                    {/* <div className='absolute bottom-4  p-2 shadow-lg shadow-black shadow   w-full h-[10px] z-30'></div> */}
                </div>
                <Button onClick={toggleCollapse} className='underline' variant={"ghost"}>{!collapsed ? "Show more" : "Show less"}</Button>
            </div>
        </div>
    )
}
