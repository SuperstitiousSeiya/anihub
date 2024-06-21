

import AnimeInfoTitle from "@/components/anime/info/AnimeInfoTitle"
import EpisodeList from "@/components/anime/info/EpisodeList"
import AnimeOverview from "@/components/anime/info/AnimeOverview"
import AnimeInfoRecommendations from "@/components/anime/info/AnimeInfoRecommendations"
import SideBarAnimeDetails from "@/components/anime/info/SideBarAnimeDetails"
import useAnime from "@/lib/hooks/useAnime"
export default async function AnimeInfoPage({ params }: { params: { animeId: string } }) {
    const { animeId } = params
    const { fetchAnimeInfo } = useAnime()
    const animeInfo = await fetchAnimeInfo(animeId)

    if (!animeInfo) {
        return <>Error</>
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8 md:py-12 container">
            <div className="grid gap-8">
                <AnimeInfoTitle  {...animeInfo} />
                <EpisodeList {...animeInfo} />
                <AnimeOverview  {...animeInfo} />
                <AnimeInfoRecommendations recommendations={animeInfo.recommendations} />
            </div>
            <SideBarAnimeDetails {...animeInfo} />
        </div>
    )
}