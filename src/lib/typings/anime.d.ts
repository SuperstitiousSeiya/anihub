interface Title {
    romaji?: string;
    english?: string;
    native?: string;
    userPreferred?: string;
}

interface Name {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreferred: string;
}


interface Trailer {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
}

export interface RecentAnimeEpisode {
    id: string;
    title: Title;
    image: string;
    imageHash: string;
    episodeId: string;
    episodeTitle: string;
    episodeNumber: number;
    type: AnimeType;
}



enum AnimeType {
    TV = "TV",
    Movie = "Movie",
    OVA = "OVA",

}


export interface DateInfo {
    year: number;
    month: number;
    day: number;
}

export interface Recommendation {
    id: string;
    malId: string;
    title: Title;
    status: string;
    episodes: number;
    image: string;
    cover: string;
    rating: number;
    type: string;
}

export interface VoiceActors {
    id: string;
    language: string;
    name: Name;
    image: string;
    imageHash?: string;
}

export interface Character {
    id: string;
    role: string;
    name: Name;
    image: string;
    imageHash: string;
    voiceActors: VoiceActors[];
}

export interface Relation {
    id: number;
    relationType: string;
    malId: number;
    title: string[];
    status: string;
    episodes: number;
    image: string;
    color: string;
    type: string;
    cover: string;
    rating: number;
}

export interface Episode {
    id: string;
    title: string;
    image: string;
    imageHash: string;
    number: number;
    createdAt: string | number;
    description: string;
    url: string;
}


export interface Anime {
    id: string;
    malId: number;
    title: Title;
    image: string;
    imageHash?: string;
    trailer?: Trailer;
    description?: string;
    status?: string;
    cover?: string;
    coverHash?: string;
    rating?: number;
    releaseDate?: number;
    color?: string;
    genres?: string[];
    totalEpisodes?: number;
    duration?: number;
    type?: AnimeType | string;
    totalEpisodes?: number;
    currentEpisodeCount?: number;
}


export interface AnimeInfo {
    id: string;
    title: Title;
    malId: number;
    synonyms?: string[];
    isLicensed?: boolean;
    isAdult?: boolean;
    countryOfOrigin?: string;
    trailer?: Trailer;
    imageHash?: string;
    image: string;
    popularity: number;
    color: string;
    cover: string;
    coverHash: string;
    description: string;
    status: string;
    releaseDate: number;
    startDate: DateInfo;
    endDate: DateInfo;
    rating: number;
    duration?: number;
    genres: string[];
    season: string;
    studios: string[];
    type: AnimeType | string;
    subOrDub?: "sub" | "dub";
    recommendations: Recommendation[];
    characters: Character[];
    relations: Relation[];
    episodes: Episode[];
}
