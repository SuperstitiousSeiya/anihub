import CategoryCard from '@/components/AnimeUi/Card/CategoryCard';
import LoadMoreButton from '@/components/AnimeUi/LoadMoreButton';
import useAnime from '@/lib/hooks/useAnime';
import React from 'react'

export default async function TrendingPage({ searchParams }: { searchParams: { page: string, perPage: string } }) {

    const { page, perPage } = searchParams
    const currentPage = page ? page : 1
    const totalPage = perPage ? parseInt(perPage) : 10
    const { fetchTrendingAnime } = useAnime();
    const { results, hasNextPage } = await fetchTrendingAnime(currentPage, perPage)
  
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    results.map((item, index) => {
                        return (
                            <CategoryCard key={index} {...item} />
                        )
                    })
                }
            </div>{
                hasNextPage && totalPage < 50 && <LoadMoreButton perPage={totalPage} />
            }

        </section>
    )
}
