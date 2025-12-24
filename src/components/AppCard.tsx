import { Link } from 'react-router-dom';
import { AppData } from '@/types/app';
import { cn } from '@/lib/utils';
import { 
  Smartphone, 
  Globe, 
  Puzzle, 
  Monitor, 
  Lock,
  Apple,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { AppType, AppStatus } from '@/types/app';

interface AppCardProps {
  app: AppData;
}

const typeIcons: Record<AppType, LucideIcon> = {
  'android': Smartphone,
  'ios': Apple,
  'web': Globe,
  'extension': Puzzle,
  'website': Monitor,
  'internal': Lock
};

const statusStyles: Record<AppStatus, string> = {
  'live': 'bg-chart-2/10 text-chart-2 border-chart-2/30',
  'in-progress': 'bg-chart-4/10 text-chart-4 border-chart-4/30',
  'archived': 'bg-muted text-muted-foreground border-border'
};

const statusLabels: Record<AppStatus, string> = {
  'live': 'Live',
  'in-progress': 'In Progress',
  'archived': 'Archived'
};

export const AppCard = ({ app }: AppCardProps) => {
  const Icon = typeIcons[app.type];

  return (
    <Link 
      to={`/app/${app.id}`}
      className="group flex flex-col bg-card border-2 border-border p-5 transition-all hover:shadow-sm hover:border-foreground"
    >
      {/* Header with icon and status */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center border-2 border-border bg-secondary group-hover:bg-accent transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <span className={cn(
          'text-xs font-medium px-2 py-1 border',
          statusStyles[app.status]
        )}>
          {statusLabels[app.status]}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2 group-hover:underline underline-offset-2">
        {app.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
        {app.shortDescription}
      </p>

      {/* Tech stack preview */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {app.techStack.slice(0, 3).map((tech) => (
          <span 
            key={tech}
            className="text-xs font-mono px-2 py-0.5 bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
        {app.techStack.length > 3 && (
          <span className="text-xs text-muted-foreground px-1">
            +{app.techStack.length - 3}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
        <span>See app details</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
};
