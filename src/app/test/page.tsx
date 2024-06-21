"use client";

import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



export default function PaginatedItems() {
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className='mt-20 text-white container'>
                <Items currentItems={currentItems} />
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
        </>
    );
}


function Items({ currentItems }: any) {
    return (
        <>
            {currentItems &&
                currentItems.map((item: any) => (
                    <div key={item} className=''>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}

// Add a <div id="container"> to your HTML to see the component rendered.
