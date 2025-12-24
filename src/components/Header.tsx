import { Link } from 'react-router-dom';
import { Grid3X3 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b-2 border-border bg-background sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Grid3X3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg block leading-tight">DevCatalog</span>
              <span className="text-xs text-muted-foreground">Software Portfolio</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
