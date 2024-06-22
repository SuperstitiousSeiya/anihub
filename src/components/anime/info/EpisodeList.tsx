"use client"
import React, { useState } from 'react'
import { AnimeInfo } from '@/lib/typings/anime'
import ReactPaginate from 'react-paginate'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { EpisodeItem } from './compo/EpisodeItem'
export default function EpisodeList(props: AnimeInfo) {
    const {episodes, id} = props;
    const items = episodes
    const itemsPerPage = 12
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='w-full'>
            <h2 className="text-2xl font-bold mb-4">Episode List</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <EpisodeItem id={id} episodes={currentItems} />
            </div>
            <ReactPaginate
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                marginPagesDisplayed={2}
                nextClassName={"item next "}
                nextLabel={<ChevronsRight />}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageClassName={'item pagination-page '}
                pageRangeDisplayed={5}
                previousClassName={"item previous"}
                previousLabel={<ChevronsLeft />}
            />

        </div>
    )
}


