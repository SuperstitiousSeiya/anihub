
import { Card } from "@/components/ui/card"
import { Character, VoiceActors } from "@/lib/typings/anime"
import Image from "next/image"

export default function CharactersCard(props: Character) {

    const { name, image, role, voiceActors } = props
    const voiceActor = voiceActors[0]

    return (
        <Card className="flex items-center gap-6 p-6 rounded-xl bg-background w-[400px] flex-1">
            <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image src={image} alt="Character Image" width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <div className="grid gap-2 flex-1">
                <div className="grid gap-1">
                    <h3 className="text-xl font-semibold text-nowrap">{name.userPreferred}</h3>
                    <p className="text-muted-foreground">{role}</p>
                </div>

                {
                    voiceActor && <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={voiceActor?.image} alt="Voice Actor" width={40} height={40} className="object-cover w-full h-full" />
                        </div>
                        <div className="grid gap-0.5">
                            <p className="font-medium text-nowrap">{voiceActor?.name.userPreferred}</p>
                            <p className="text-sm text-muted-foreground">Voice Actor</p>
                        </div>
                    </div>
                }

            </div>
        </Card>
    )
}