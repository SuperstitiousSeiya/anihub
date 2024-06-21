import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AnimeInfo, Recommendation } from '@/lib/typings/anime'
import AnimeCardWithGenre from '@/components/AnimeUi/Card/AnimeCardWithGenre'
export default function AnimeInfoRecommendations({recommendations}: { recommendations: Recommendation[] }) {
    
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
                {recommendations.map((recommendation) => (
                    <AnimeCardWithGenre key={recommendation.id} {...recommendation} />
                ))}
            </div>
        </div>
    )
}
