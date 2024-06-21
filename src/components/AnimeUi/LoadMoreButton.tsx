"use client"
import React, { useCallback, useState } from 'react'
import { Button } from '../ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function LoadMoreButton({ perPage = '10' }: { perPage: string | number }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const handleLoadMore = () => {
        const newValue = parseInt(perPage as string) + 10;
        const newQueryString = createQueryString('perPage', newValue.toString());
        router.replace(`${pathname}?${newQueryString}`, { scroll: false });
    };

    return (
        <Button onClick={handleLoadMore}>
            Load More
        </Button>
    );
}
