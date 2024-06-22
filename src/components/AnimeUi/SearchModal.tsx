"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from "react";
import { Anime } from "@/lib/typings/anime";
import useAnime from "@/lib/hooks/useAnime";
export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Anime[]>([]);
    const { fetchAnimeBySearch } = useAnime();
    const [loading, setLoading] = useState(false);
    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        fetchResult();
    }, [query]);



    useEffect(() => {
        function handleClickOutside(event: any) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);



    const fetchResult = async () => {
        try {
            setLoading(true);
            const result = await fetchAnimeBySearch(query);
            setResults(result.results);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }

    }

    const searchResult = useMemo(() => {
        if (loading) return <p>Loading...</p>

        if (query === "") {
            return <p>Search for an anime</p>;
        }

        if (results.length === 0) {
            return <p>No results found</p>;
        }

        return results.map(result => (
            <Link key={result.id} href={`/${result.id}`} className="min-h-[5rem] bg-card hover:bg-secondary rounded-md overflow-hidden group flex" onClick={() => { setIsOpen(false); setQuery("") }}>
                <div className="block">
                    <Image
                        src={result.image}
                        alt={`Image for ${result.title}`}
                        width={100}
                        height={100}
                        className="w-full h-[80px] object-cover group-hover:opacity-80 transition-opacity"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-1">{result.title.userPreferred}</h3>
                    <p className="text-muted-foreground text-sm">{result.genres?.join(", ")}</p>
                </div>
            </Link>
        ));
    }, [query, results]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger onClick={() => setIsOpen(true)}>
                <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </DialogTrigger>
            <DialogContent ref={modalRef} className="sm:max-w-[600px]">
                <div className="flex items-center justify-between mb-4">
                    <DialogTitle>Search</DialogTitle>
                </div>
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                        value={query}
                        onChange={handleSearch}
                        type="search"
                        placeholder="Search Anime..."
                        className="pl-12 pr-4 py-2 rounded-md border border-muted focus:border-primary focus:ring-primary"
                    />
                </div>
                <div className="flex flex-col gap-4 max-h-[20rem] overflow-y-auto">
                    {searchResult}
                </div>
            </DialogContent>
        </Dialog>
    );
}
