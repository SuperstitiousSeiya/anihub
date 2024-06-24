
import VideoPlayer from "@/components/AnimeUi/VideoPlayer/player";
import useAnime from "@/lib/hooks/useAnime";
import Link from "next/link"

export default async function AnimeWatchPage({ params }: { params: { animeId: string, episodeId: string } }) {
  const { animeId, episodeId } = params;
  const { fetchAnimeWatch } = useAnime();
  const animewatch = await fetchAnimeWatch(episodeId);

  const defaultSource = animewatch?.sources?.find(source => source?.quality === "default");


  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] container">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-4 p-4">
          <div className="flex h-[60px] items-center border-b">
            <div className="text-xl font-bold">Attack on Titan</div>
          </div>
          <div className="flex-1 overflow-auto">
            <nav className="grid gap-2">
              <div className="flex items-center gap-3 rounded-md bg-muted p-2">
                <div className="text-sm font-medium">Episode 1</div>
                <div className="ml-auto rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                  Playing
                </div>
              </div>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Episode 2
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Episode 3
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Episode 4
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Episode 5
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Episode 6
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <div className="text-xl font-bold">Attack on Titan</div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <VideoPlayer {...animewatch} />
          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">Episode 1</div>
              <div className="ml-auto rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                Currently Playing
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Eren Jaeger swears to destroy the Titans that took his mother from him. With his friends Armin and Mikasa,
              he joins the military with the pledge to take the fight to the Titans and reclaim the world.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}