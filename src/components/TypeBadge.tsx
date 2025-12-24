import { AppType } from '@/types/app';
import { cn } from '@/lib/utils';
import { 
  Smartphone, 
  Globe, 
  Puzzle, 
  Monitor, 
  Lock,
  Apple
} from 'lucide-react';

interface TypeBadgeProps {
  type: AppType;
  className?: string;
}

const typeConfig: Record<AppType, { label: string; icon: React.ElementType }> = {
  'android': { label: 'Android', icon: Smartphone },
  'ios': { label: 'iOS', icon: Apple },
  'web': { label: 'Web App', icon: Globe },
  'extension': { label: 'Extension', icon: Puzzle },
  'website': { label: 'Website', icon: Monitor },
  'internal': { label: 'Internal', icon: Lock }
};

export const TypeBadge = ({ type, className }: TypeBadgeProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;
  
  return (
    <span 
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono border-2 border-border bg-background',
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
};
