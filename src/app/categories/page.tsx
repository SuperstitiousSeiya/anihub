/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fBByNRDArF7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 p-4 md:p-8">
      <div className="bg-card rounded-lg shadow-lg p-6 xl:w-1/2 w-full text-primary">
        <h2 className="text-xl font-bold mb-4">Explore Anime</h2>
        <nav className="space-y-2">
          <Link href="#" className="block text-primaryhover:text-primary" prefetch={false}>
            Top Airing
          </Link>
          <Link href="#" className="block text-primary hover:text-primary" prefetch={false}>
            Upcoming
          </Link>
          <Link href="#" className="block text-primary hover:text-secondary" prefetch={false}>
            Genres
          </Link>
        </nav>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 1" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Attack on Titan</h3>
            <p className="text-muted-foreground text-sm">
              In a world where humanity lives in fear of giant humanoid Titans, a young boy named Eren Yeager vows to
              destroy them all.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 2" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Demon Slayer</h3>
            <p className="text-muted-foreground text-sm">
              A young boy becomes a demon slayer after his family is killed and his sister is turned into a demon.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 3" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Jujutsu Kaisen</h3>
            <p className="text-muted-foreground text-sm">
              A high school student joins a secret organization of Jujutsu Sorcerers in order to kill a powerful curse
              that haunts him.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 4" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">My Hero Academia</h3>
            <p className="text-muted-foreground text-sm">
              In a world where people are born with unique superpowers, a young boy named Izuku Midoriya dreams of
              becoming a superhero.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 5" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Spy x Family</h3>
            <p className="text-muted-foreground text-sm">
              A spy, an assassin, and a telepath form an unlikely family to complete a high-stakes mission.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 6" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Chainsaw Man</h3>
            <p className="text-muted-foreground text-sm">
              A young man makes a deal with the devil to become a mercenary who hunts down dangerous devils.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 7" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Kaguya-sama: Love is War</h3>
            <p className="text-muted-foreground text-sm">
              Two geniuses at a prestigious high school engage in a battle of wits, each trying to get the other to
              confess their love first.
            </p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Anime 8" width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Haikyuu!!</h3>
            <p className="text-muted-foreground text-sm">
              A boy with a passion for volleyball joins a high school team and works to become the best player he can
              be.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}