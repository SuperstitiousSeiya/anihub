import React from 'react'

export default function Loading() {
    return (
        <div className='h-[80vh] w-full flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center relative'>
                <div className="loader">
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                </div>
                <p className='text-xl absolute bottom-0'>Loading...</p>
            </div>
        </div>
    )
}
