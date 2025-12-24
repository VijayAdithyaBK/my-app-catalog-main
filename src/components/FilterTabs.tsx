import { cn } from '@/lib/utils';

export type FilterTab = 'all' | 'live' | 'in-progress' | 'archived';

interface FilterTabsProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
}

const tabs: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Live' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'archived', label: 'Archived' },
];

export const FilterTabs = ({ activeTab, onTabChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-1 border-b-2 border-border">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            'px-4 py-3 text-sm font-medium transition-colors relative',
            activeTab === tab.value
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {tab.label}
          {activeTab === tab.value && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
          )}
        </button>
      ))}
    </div>
  );
};
