import AnimeCard from "@/components/AnimeUi/Card/AnimeCard";
import RecentAnimeCard from "@/components/AnimeUi/Card/RecentAnimeCard";
import useAnime from "@/lib/hooks/useAnime";


export default async function RecentAnimeCards() {
    const { fetchAnimeRecentEpisodes } = useAnime();
    const { results } = await fetchAnimeRecentEpisodes(1, 10);

    return (
        <>
            {results.map((item, index) => (
                <RecentAnimeCard key={item.id + index} {...item } />))}
        </>
    )
}
