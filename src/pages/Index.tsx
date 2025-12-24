import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useExcelApps } from '@/hooks/useExcelApps';
import { AppGrid } from '@/components/AppGrid';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoryCard } from '@/components/CategoryCard';
import { FilterTabs, FilterTab } from '@/components/FilterTabs';
import { Loader2, X } from 'lucide-react';
import { AppType, AppStatus } from '@/types/app';

const CATEGORY_TYPES: AppType[] = ['android', 'ios', 'web', 'extension', 'website', 'internal'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<AppType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<FilterTab>('all');

  const { data: apps = [], isLoading, error } = useExcelApps();

  // Count apps by type
  const typeCounts = useMemo(() => {
    const counts: Record<AppType, number> = {
      android: 0,
      ios: 0,
      web: 0,
      extension: 0,
      website: 0,
      internal: 0
    };
    apps.forEach(app => {
      counts[app.type]++;
    });
    return counts;
  }, [apps]);

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = searchQuery === '' || 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = typeFilter === 'all' || app.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || app.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [apps, searchQuery, typeFilter, statusFilter]);

  const hasActiveFilters = searchQuery !== '' || typeFilter !== 'all' || statusFilter !== 'all';

  const clearFilters = () => {
    setSearchQuery('');
    setTypeFilter('all');
    setStatusFilter('all');
  };

  const handleCategoryClick = (type: AppType) => {
    setTypeFilter(typeFilter === type ? 'all' : type);
  };

  return (
    <>
      <Helmet>
        <title>DevCatalog - Software Portfolio</title>
        <meta name="description" content="A catalog of software projects including Android, iOS, web apps, browser extensions, and internal tools." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <HeroSection 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalApps={apps.length}
        />

        <main className="container py-8">
          {/* Categories Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Categories</h2>
                <p className="text-sm text-muted-foreground">Browse apps by platform</p>
              </div>
              {typeFilter !== 'all' && (
                <button
                  onClick={() => setTypeFilter('all')}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                  Clear category
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORY_TYPES.map((type) => (
                <CategoryCard
                  key={type}
                  type={type}
                  count={typeCounts[type]}
                  isActive={typeFilter === type}
                  onClick={() => handleCategoryClick(type)}
                />
              ))}
            </div>
          </section>

          {/* Apps Section */}
          <section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  {typeFilter !== 'all' 
                    ? `${typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)} Apps` 
                    : 'All Apps'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Showing {filteredApps.length} of {apps.length} projects
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <FilterTabs activeTab={statusFilter} onTabChange={setStatusFilter} />
                
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 px-3 py-2 text-sm border-2 border-border hover:border-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="border-2 border-destructive p-6 text-center">
                <p className="text-destructive font-medium">Failed to load apps</p>
                <p className="text-sm text-muted-foreground mt-1">Please check that apps.xlsx exists in public/data/</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !error && apps.length === 0 && (
              <div className="border-2 border-dashed border-border p-12 text-center">
                <p className="text-lg font-medium mb-2">No apps yet</p>
                <p className="text-sm text-muted-foreground">
                  Add an apps.xlsx file to public/data/ to populate the catalog.
                </p>
              </div>
            )}

            {/* No Results State */}
            {!isLoading && !error && apps.length > 0 && filteredApps.length === 0 && (
              <div className="border-2 border-dashed border-border p-12 text-center">
                <p className="text-lg font-medium mb-2">No matching apps</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Try adjusting your filters or search query.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* App Grid */}
            {!isLoading && !error && filteredApps.length > 0 && (
              <AppGrid apps={filteredApps} />
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-border py-8 mt-12">
          <div className="container text-center">
            <p className="font-bold mb-1">DevCatalog</p>
            <p className="text-sm text-muted-foreground">
              Built for developers • No marketing, just software
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
