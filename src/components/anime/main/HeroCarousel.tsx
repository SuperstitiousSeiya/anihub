import React, { useMemo } from 'react'

import useAnime from '@/lib/hooks/useAnime';
import CarouselComponent from './CarouselComponent';

export default async function HeroCarousel() {

  const { fetchPopularAnime } = useAnime();
  const { results } = await fetchPopularAnime();


  return (
      <CarouselComponent results={results} />
  )
}
