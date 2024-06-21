import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMonthName } from '@/lib/stringUtils'
import { AnimeInfo } from '@/lib/typings/anime'
import React from 'react'

export default function SideBarAnimeDetails(props: AnimeInfo) {

    const { title, genres, status, season, type, releaseDate, startDate, endDate, rating, duration, studios, isAdult } = props
    const titles = () => {
        return Object.entries(title).map(([key, value]) => (
            <div key={key}>{value},</div>
        ))
    }

    return (
        <div className="grid gap-4">
            <Card className='h-fit'>
                <CardHeader>
                    <CardTitle>Anime Details</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Title</div>
                        <div className='text-gray-400'>{titles()}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Genres</div>
                        <div className='text-gray-400'>{genres.join(', ')}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Status:</div>
                        <div className='text-gray-400'>{status}</div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Type:</div>
                        <div className='text-gray-400'>{type}</div>
                    </div>

                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Season:</div>
                        <div className='text-gray-400'>{season}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Release date:</div>
                        <div className='text-gray-400'> {releaseDate}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Start date:</div>
                        <div className='text-gray-400'> {getMonthName(startDate.month)} {startDate.day}, {startDate.year}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">End date:</div>
                        <div className='text-gray-400'> {getMonthName(endDate.month)} {endDate.day}, {endDate.year}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Rating:</div>
                        <div className='text-gray-400'>{rating}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Duration:</div>
                        <div className='text-gray-400'>{duration}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Studios:</div>
                        <div className='text-gray-400'>{studios.join(', ')}</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <div className="font-medium">Adult:</div>
                        <div className='text-gray-400'>{isAdult ? 'Yes' : 'No'}</div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
