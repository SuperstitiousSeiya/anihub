import useAnime from '@/lib/hooks/useAnime';
import React from 'react'

import AnimeCard from '@/components/AnimeUi/Card/AnimeCard';
export default async function PopularCards() {
    const { fetchPopularAnime } = useAnime();
    const { results } = await fetchPopularAnime();

    return (
        <>
            {results.map((item, index) => (
                <AnimeCard key={item.id + index} {...item} />))}
        </>
    )
}
