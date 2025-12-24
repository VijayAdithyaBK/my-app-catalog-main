import { AppStatus } from '@/types/app';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: AppStatus;
  className?: string;
}

const statusConfig: Record<AppStatus, { label: string; className: string }> = {
  'live': {
    label: 'LIVE',
    className: 'bg-primary text-primary-foreground'
  },
  'in-progress': {
    label: 'IN PROGRESS',
    className: 'bg-accent text-accent-foreground border-2'
  },
  'archived': {
    label: 'ARCHIVED',
    className: 'bg-muted text-muted-foreground'
  }
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <span 
      className={cn(
        'inline-block px-2 py-1 text-xs font-mono font-bold tracking-wide',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};
