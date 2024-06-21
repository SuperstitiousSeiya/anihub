import { cn } from '@/lib/utils'
import React from 'react'

export default function HtmlText({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <p className={cn("text-gray-300  mt-2  transition-all ", className)}
            dangerouslySetInnerHTML={{ __html:children as string}}>
        </p>
    )
}
