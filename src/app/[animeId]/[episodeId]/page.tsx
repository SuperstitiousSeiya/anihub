import HtmlText from "@/components/AnimeUi/HTMLText";
import Player from "@/components/player/Player";
import useAnime from "@/lib/hooks/useAnime";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";

export default async function AnimeWatchPage({
  params,
}: {
  params: { animeId: string; episodeId: string };
}) {
  const { animeId, episodeId } = params;

  const { fetchAnimeWatch, fetchAnimeInfo, fetchGogoAnimeEpisodes } = useAnime();
  const [episodeInfo, animeInfo] = await Promise.all([
    fetchAnimeWatch(episodeId),
    fetchAnimeInfo(animeId),
  ]);

  const gogoId = animeInfo.mappings.find((mapping) => mapping.providerId == "gogoanime")?.id;
  const gogoEpisodes = await fetchGogoAnimeEpisodes(gogoId?.split('/')[2]!)

  const defaultSource = episodeInfo.sources.find(
    (source) => source.quality === "default"
  );
  const { description, episodes } = animeInfo;
  const currentEpisodes = gogoEpisodes ? gogoEpisodes.episodes : episodes
  const currentEpisodePlaying = currentEpisodes.find(
    (episode) => episode.id === episodeId
  );




  return (
    <div className="grid min-h-screen w-full row-start-2 lg:row-start-1  grid-cols-[1fr] lg:grid-cols-[280px_1fr] container">
      <div className="border-r bg-muted/40 h-fit sticky top-[4.5rem]">
        <div className="flex h-full max-h-screen flex-col gap-4 p-4">
          <div className="flex h-[60px] items-center border-b">
            <p className="text-xl font-bold">
              Episodes
            </p>

          </div>
          <div className="flex-1 overflow-auto ">

            <nav className="grid gap-2 grid-cols-4 ">
              {currentEpisodes.map((episode, index) => (
                <Link
                  href={`/${animeId}/${episode.id}`}
                  key={episode.id + index}
                  className={cn("flex flex-1 items-center justify-center  gap-3 rounded-md bg-muted p-2 hover:bg-muted-foreground transition-colors", episode.id === currentEpisodePlaying?.id && "bg-primary")}
                >
                  {
                    episode.id === currentEpisodePlaying?.id ? <div className="text-sm font-medium "> <Play className="text-background" /></div> : <div className="text-sm font-medium">{episode.number}</div>
                  }



                  {/* {episode.id === currentEpisodePlaying?.id && (
                    <div className="ml-auto rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      Current Playing
                    </div>
                  )} */}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:row-start-1 row-start-1 lg:col-start-2">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Link href={`/${animeId}`} className="text-lg font-bold">
            Episode {currentEpisodePlaying?.number} :{" "}
            {animeInfo.title.userPreferred
              ? animeInfo.title.userPreferred
              : animeInfo.title?.english}
          </Link>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="rounded-lg overflow-hidden">
            <Player
              src={defaultSource?.url}
              cover={currentEpisodePlaying?.image}
              title={currentEpisodePlaying?.title}
            ></Player>
          </div>
          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">
                Episode {currentEpisodePlaying?.number} :{" "}
                {currentEpisodePlaying?.title}
              </div>
              <div className="ml-auto rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                Currently Playing
              </div>
            </div>
            <HtmlText className="text-sm text-muted-foreground">
              {description}
            </HtmlText>
          </div>
        </main>
      </div>
    </div>
  );
}
