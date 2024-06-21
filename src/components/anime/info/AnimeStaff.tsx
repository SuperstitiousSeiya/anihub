import React from 'react'
import Image from 'next/image'
import { AnimeInfo } from '@/lib/typings/anime'
export default function AnimeStaff({}: AnimeInfo) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Staff</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                    <Image
                        src="/placeholder.svg"
                        alt="Haruo Sotozaki"
                        width={100}
                        height={100}
                        className="rounded-full object-cover aspect-square"
                    />
                    <div className="text-center mt-2">
                        <div className="font-semibold">Haruo Sotozaki</div>
                        <div className="text-muted-foreground text-sm">Director</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/placeholder.svg"
                        alt="Akira Matsushima"
                        width={100}
                        height={100}
                        className="rounded-full object-cover aspect-square"
                    />
                    <div className="text-center mt-2">
                        <div className="font-semibold">Akira Matsushima</div>
                        <div className="text-muted-foreground text-sm">Character Designer</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/placeholder.svg"
                        alt="Yuki Kajiura"
                        width={100}
                        height={100}
                        className="rounded-full object-cover aspect-square"
                    />
                    <div className="text-center mt-2">
                        <div className="font-semibold">Yuki Kajiura</div>
                        <div className="text-muted-foreground text-sm">Composer</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/placeholder.svg"
                        alt="Ufotable"
                        width={100}
                        height={100}
                        className="rounded-full object-cover aspect-square"
                    />
                    <div className="text-center mt-2">
                        <div className="font-semibold">Ufotable</div>
                        <div className="text-muted-foreground text-sm">Studio</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
