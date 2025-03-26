import AnimeCard from "@/components/AnimeUi/Card/AnimeCard";
import RecentAnimeCard from "@/components/AnimeUi/Card/RecentAnimeCard";
import useAnime from "@/lib/hooks/useAnime";


export default async function RecentAnimeCards() {
    const { fetchAnimeRecentEpisodes } = useAnime();
    const response = await fetchAnimeRecentEpisodes(1, 10);
    if(!response) {  
        return <>Error</>
    }
    const { results } = response;
    if (!results) {
        return <>Error</>
    }
    return (
        <>
            {results.map((item, index) => (
                <RecentAnimeCard key={item.id + index} {...item} />))}
        </>
    )
}
