import { makeRequest } from "../request";
import { AnimeInfo, Episode, MediaData } from "../typings/anime";
import { AnimeInfoResponse, AnimeSearchResponse, PopularAnimeResponse, RecentAnimeEpisodeResponse, TrendingAnimeResponse } from "../typings/anime.response";

const BASE_URL = "https://weebhub-media-provider.vercel.app/meta/anilist";


const animeFetch = makeRequest(BASE_URL);
const gogoFetch = makeRequest("https://weebhub-media-provider.vercel.app/anime/gogoanime");
const useAnime = () => {

    const fetchAnimeRecentEpisodes = async (page:number = 1, perPage:number = 10) => {
        const response = await animeFetch.get<RecentAnimeEpisodeResponse>(`/recent-episodes`, {params: {page: page, perPage: perPage}});
        return response.data;
    }

    const fetchPopularAnime = async (page:number| string = 1, perPage:number | string = 10) => {
        const response = await animeFetch.get<PopularAnimeResponse>(`/popular`, {params: {page: page, perPage: perPage}});
        return response.data;
    }


    const fetchTrendingAnime = async (page:number | string = 1, perPage:number | string = 10) => {
        const response = await animeFetch.get<TrendingAnimeResponse>(`/trending`, {params: {page: page, perPage: perPage}, cache:"no-cache"});
        return response.data;
    }
    
    
    const fetchAnimeBySearch = async (query?:string, page:number = 1, perPage:number = 10, ...params: any[]) => {
        const param = {...params[0]}
        const response = await animeFetch.get<AnimeSearchResponse>(`/advanced-search`, {params: { ...param, query: query, page: page, perPage: perPage}});
        return response.data;
    }   

   const fetchAnimeInfo = async (id:string) => {
        const response = await animeFetch.get<AnimeInfo>(`/info/${id}`, {cache:"no-cache"});
        return response.data;
    }


    const fetchAnimeWatch = async (id:string) => {
        const response = await animeFetch.get<MediaData>(`/watch/${id}`);
        return response.data;
    }


    const fetchGogoAnimeEpisodes = async (id:string) => {
        const response = await gogoFetch.get<{episodes: Episode[]}>(`/info/${id}`);
        return response.data;
    }

    return {
        fetchGogoAnimeEpisodes,
        fetchAnimeRecentEpisodes,
        fetchPopularAnime,
        fetchTrendingAnime,
        fetchAnimeBySearch,
        fetchAnimeInfo,
        fetchAnimeWatch,
    }
}

export default useAnime;