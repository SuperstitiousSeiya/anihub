"use client"

import React from 'react'

export default function Error({error}: {error: Error & { digest?: string }}) {
  return (
    <div className='h-[80vh] w-full flex items-center justify-center text-2xl font-semibold text-red-700'>
        Error Occured | Please refresh the page 
    </div>
  )
}
