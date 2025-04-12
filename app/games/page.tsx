import { HeroSection } from "../../components/games/hero-section"
import { FeaturedGames } from "../../components/games/featured-games"
import { GameCategories } from "../../components/games/game-categories"
import { NewReleases } from "../../components/games/new-releases"
import { TopSellers } from "../../components/games/top-sellers"
import { ComingSoon } from "../../components/games/coming-soon"
import { ServerHosting } from "../../components/games/server-hosting"

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative">
        <HeroSection />
        <div className="container mx-auto px-4 py-6 relative z-10">
          <FeaturedGames />
          <GameCategories />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
            <div className="lg:col-span-8">
              <NewReleases />
            </div>
            <div className="lg:col-span-4 space-y-8">
              <TopSellers />
              <ComingSoon />
            </div>
          </div>
          <ServerHosting />
        </div>
      </div>
    </main>
  )
}
