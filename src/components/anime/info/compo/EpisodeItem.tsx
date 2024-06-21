import { Anime, AnimeInfo, Episode } from "@/lib/typings/anime";
import Link from "next/link";



export function EpisodeItem({ episodes, id }: { episodes: Episode[], id: string }) {
    return (
        <>
            {episodes && episodes.map((episode, i) => (
                <div key={i} className="relative group border-muted border rounded-lg px-4 hover:bg-muted transition-colors">
                    <Link href={`/${id}/${episode.id}`} className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Episode {i + 1}</span>
                    </Link>
                    <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">Episode {episode.number}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}