import { AppData } from '@/types/app';
import { AppCard } from './AppCard';
import { cn } from '@/lib/utils';

interface AppGridProps {
  apps: AppData[];
  className?: string;
}

export const AppGrid = ({ apps, className }: AppGridProps) => {
  if (apps.length === 0) {
    return (
      <div className="border-2 border-dashed border-border p-8 text-center">
        <p className="text-muted-foreground text-sm">No apps found</p>
      </div>
    );
  }

  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      className
    )}>
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};
