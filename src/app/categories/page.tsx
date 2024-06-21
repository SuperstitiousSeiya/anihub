import CategoryCard from "@/components/AnimeUi/Card/CategoryCard";
import LoadMoreButton from "@/components/AnimeUi/LoadMoreButton";
import { Button } from "@/components/ui/button";
import useAnime from "@/lib/hooks/useAnime";
import Image from "next/image";
import Link from "next/link";


export default async function CategoriesPage({ searchParams }: { searchParams: { page: string, perPage: string } }) {

  const { page, perPage } = searchParams
  const currentPage = page ? page : 1
  const totalPage = perPage ? perPage : 10
  const { fetchPopularAnime } = useAnime()
  const { results, hasNextPage } = await fetchPopularAnime(currentPage, perPage)
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
        hasNextPage && totalPage != "50" && <LoadMoreButton perPage={totalPage as string} />
      }

    </section>
  )
}