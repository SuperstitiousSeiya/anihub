import { makeRequest } from "../request";
import { AnimeSearchResponse, PopularAnimeResponse, RecentAnimeEpisodeResponse, TrendingAnimeResponse } from "../typings/anime.response";

const BASE_URL = "https://weebhub-media-provider.vercel.app/meta/anilist";


const animeFetch = makeRequest(BASE_URL);

const useAnime = () => {

    const fetchAnimeRecentEpisodes = async (page:number = 1, perPage:number = 10) => {
        const response = await animeFetch.get<RecentAnimeEpisodeResponse>(`/recent-episodes`, {params: {page: page, perPage: perPage}});
        return response.data;
    }

    const fetchPopularAnime = async (page:number = 1, perPage:number = 10) => {
        const response = await animeFetch.get<PopularAnimeResponse>(`/popular`, {params: {page: page, perPage: perPage}});
        return response.data;
    }


    const fetchTrendingAnime = async (page:number = 1, perPage:number = 10) => {
        const response = await animeFetch.get<TrendingAnimeResponse>(`/trending`, {params: {page: page, perPage: perPage}, cache:"no-cache"});
        return response.data;
    }
    
    
    const fetchAnimeBySearch = async (query?:string, page:number = 1, perPage:number = 10, ...params: any[]) => {
        const param = {...params[0]}
        const response = await animeFetch.get<AnimeSearchResponse>(`/advanced-search`, {params: { ...param, query: query, page: page, perPage: perPage}});
        return response.data;
    }

    return {
        fetchAnimeRecentEpisodes,
        fetchPopularAnime,
        fetchTrendingAnime,
        fetchAnimeBySearch

    }
}

export default useAnime;