import { cn } from '@/lib/utils';

interface TechStackBadgeProps {
  tech: string;
  className?: string;
}

export const TechStackBadge = ({ tech, className }: TechStackBadgeProps) => {
  return (
    <span 
      className={cn(
        'inline-block px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground',
        className
      )}
    >
      {tech}
    </span>
  );
};

interface TechStackListProps {
  stack: string[];
  className?: string;
  max?: number;
}

export const TechStackList = ({ stack, className, max = 4 }: TechStackListProps) => {
  const displayStack = max ? stack.slice(0, max) : stack;
  const remaining = stack.length - displayStack.length;
  
  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {displayStack.map((tech) => (
        <TechStackBadge key={tech} tech={tech} />
      ))}
      {remaining > 0 && (
        <span className="text-xs font-mono text-muted-foreground px-1">
          +{remaining}
        </span>
      )}
    </div>
  );
};
