import { Search } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalApps: number;
}

export const HeroSection = ({ searchQuery, onSearchChange, totalApps }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent py-12 md:py-16 border-b-2 border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-foreground rotate-12" />
        <div className="absolute bottom-10 left-20 w-24 h-24 border-4 border-foreground -rotate-6" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-foreground rotate-45" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Your software catalog, all in one place
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Browse through {totalApps} software projects — Android, iOS, web apps, extensions, and more.
          </p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by app name or keyword..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
