import AnimeCard from '@/components/AnimeUi/Card/AnimeCard';
import useAnime from '@/lib/hooks/useAnime'
import React from 'react'

export default async function TrendingCards() {
  const { fetchTrendingAnime } = useAnime();
  const { results } = await fetchTrendingAnime();
  if (!results) return <div>Error</div>

  return (
    <>
      {results.map((item, index) => (
        <AnimeCard key={item.id + index} {...item} />))}
    </>
  )
}
