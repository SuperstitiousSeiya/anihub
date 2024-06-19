import { Anime, RecentAnimeEpisode } from "./anime";


export interface WithPaginationReponse<T = any> {
    currentPage: number;
    results: T;
    hasNextPage?: boolean;
    hasPrevPage?: boolean;
}

export interface RecentAnimeEpisodeResponse extends WithPaginationReponse<RecentAnimeEpisode[]> {
    totalResults: number;
}

export interface PopularAnimeResponse extends WithPaginationReponse<Anime[]> {
    hasNextPage: boolean;
}

export interface TrendingAnimeResponse extends WithPaginationReponse<Anime[]> { }

export interface AiringAnimeResponse extends WithPaginationReponse<Anime[] & { airingAt: number, episode: number }> { }

export interface AnimeSearchResponse extends WithPaginationReponse<Anime[]> {
    totalResults: number;
    totalPages: number;
}
