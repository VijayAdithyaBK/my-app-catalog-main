import { cn } from '@/lib/utils';
import { 
  Smartphone, 
  Globe, 
  Puzzle, 
  Monitor, 
  Lock,
  Apple,
  LucideIcon
} from 'lucide-react';
import { AppType } from '@/types/app';

interface CategoryCardProps {
  type: AppType;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const categoryConfig: Record<AppType, { label: string; description: string; icon: LucideIcon }> = {
  'android': { 
    label: 'Android', 
    description: 'Native Android applications built for mobile devices.',
    icon: Smartphone 
  },
  'ios': { 
    label: 'iOS', 
    description: 'Native iOS apps designed for iPhone and iPad.',
    icon: Apple 
  },
  'web': { 
    label: 'Web Apps', 
    description: 'Full-featured web applications with rich functionality.',
    icon: Globe 
  },
  'extension': { 
    label: 'Extensions', 
    description: 'Browser extensions and plugins to enhance workflows.',
    icon: Puzzle 
  },
  'website': { 
    label: 'Websites', 
    description: 'Informational and marketing websites.',
    icon: Monitor 
  },
  'internal': { 
    label: 'Internal Tools', 
    description: 'Private tools built for internal team use.',
    icon: Lock 
  }
};

export const CategoryCard = ({ type, count, isActive, onClick }: CategoryCardProps) => {
  const config = categoryConfig[type];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        'text-left p-5 border-2 transition-all group',
        isActive
          ? 'border-foreground bg-primary text-primary-foreground shadow-sm'
          : 'border-border bg-card hover:border-foreground hover:shadow-xs'
      )}
    >
      <div className={cn(
        'w-10 h-10 flex items-center justify-center border-2 mb-4',
        isActive
          ? 'border-primary-foreground bg-primary-foreground/10'
          : 'border-border bg-secondary group-hover:bg-accent'
      )}>
        <Icon className="h-5 w-5" />
      </div>
      
      <h3 className="font-bold mb-1">{config.label}</h3>
      <p className={cn(
        'text-sm mb-3 line-clamp-2',
        isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
      )}>
        {config.description}
      </p>
      
      <span className={cn(
        'inline-flex items-center gap-1 text-xs font-medium px-2 py-1 border',
        isActive
          ? 'border-primary-foreground/30 bg-primary-foreground/10'
          : 'border-border bg-secondary'
      )}>
        {count} {count === 1 ? 'app' : 'apps'}
      </span>
    </button>
  );
};

export { categoryConfig };
